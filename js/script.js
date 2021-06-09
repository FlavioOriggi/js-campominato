
// -Il computer deve generare 16 numeri casuali tra 1 e 100, 
// i numeri non possono essere duplicati.

// -In seguito, deve chiedere all’utente (100 - 16) volte di inserire 
// un numero alla volta, sempre compreso tra 1 e 100. 

// -L’utente non può inserire più volte lo stesso numero.

// -Se il numero è presente nella lista dei numeri generati, la partita 
// termina, altrimenti si continua chiedendo all’utente un altro numero. 
// La partita termina quando il giocatore inserisce un numero “vietato” o 
// raggiunge il numero massimo possibile di numeri consentiti.

// -Al termine della partita il software deve comunicare il punteggio, 
// cioè il numero di volte che l’utente ha inserito un numero consentito.

// BONUS: (da fare solo se funziona tutto il resto) all’inizio il software 
// richiede anche una difficoltà all’utente che cambia il range di numeri casuali: 
// - difficoltà 0 => tra 1 e 100
// - difficoltà 1 => tra 1 e 80
// - difficoltà 2 => tra 1 e 50


var start = document.getElementById('play');
start.addEventListener("click", function(){
    
    
    / --- sezione bonus --- /
    var numMax = 100;
    var scelta = false;
    // richiedo all’utente una difficoltà che cambia il range di numeri casuali
    while (!scelta){
        scelta = prompt('scegli un livello da 0 a 2, dove Zero sarà il più semplice e Due il piu difficile');        
        if (scelta == 0){
            numMax = 100;            
        } else if(scelta == 1) {
            numMax = 80;            
        } else if(scelta == 2) {  
            numMax = 50;            
        } else{
            alert('per scegliere il livello, il numero inserito deve essere tra 0 e 2.');
            return false;
        }
    }

    / --- sezione pc --- /
    // generatore numeri univoci random del pc
    var listaNumeriPc =[];
    while(listaNumeriPc.length < 16){
        var numeroRandomPc = Math.floor(Math.random() * numMax) + 1;
        if(listaNumeriPc.indexOf(numeroRandomPc) === -1) listaNumeriPc.push(numeroRandomPc);
    }
    console.log(listaNumeriPc);

    / --- sezione utente --- /
    var listaNumeriUtente =[];
    var condizione = true;
    while(listaNumeriUtente.length < 84 && condizione){
        // richiesta all'utente di 84 numeri casuali inseriti uno alla volta
        var numeroUtente = parseInt(prompt('inserisci un numero univoco compreso tra 1 e 100'));
        
        // condizioni per accettare il numero inserito dall'utente
        if(numeroUtente != 0 && numeroUtente < 101 && listaNumeriUtente.indexOf(numeroUtente) === -1){
            listaNumeriUtente.push(numeroUtente);
        } else{
            alert('devi inserire un numero, senza mai ripeterlo, tra 1 e 100');
        }  
        
        // comunicazione del punteggio
        if(listaNumeriPc.includes(numeroUtente)){        
            document.getElementById('sconfitta').classList.remove("d-none");
            document.getElementById('testo-sconfitta').innerHTML = "Hai totalizzato " + (listaNumeriUtente.length-1) + " punti";
            condizione = false;
 
            // console.log((listaNumeriUtente.length-1) + " punti");             
        }     
    }

    // comunicazione della vittoria
    if(listaNumeriUtente.length == (100 - listaNumeriPc.length)){
        document.getElementById('vittoria').classList.remove("d-none");
        document.getElementById('testo-sconfitta').innerHTML = "Complimenti, hai vinto!";

    } 

    console.log(listaNumeriUtente); 
});

