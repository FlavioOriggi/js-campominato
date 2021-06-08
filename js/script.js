
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


var start = document.getElementById('play');
start.addEventListener("click", function(){

    / --- sezione pc --- /
    // generatore numeri univoci random del pc
    var listaNumeriPc =[];
    while(listaNumeriPc.length < 16){
        var numeroRandomPc = Math.floor(Math.random() * 99) + 1;
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
            alert('Hai perso!');  
            console.log((listaNumeriUtente.length-1) + " punti");
            condizione = false; 
        }     
    }

    // comunicazione della vittoria
    if(listaNumeriUtente.length == (100 - listaNumeriPc.length)){
        alert('Hai vinto');
    } 

    console.log(listaNumeriUtente); 
});

