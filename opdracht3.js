opdr3()
function opdr3(){
    naam = prompt("voer je naam in")
    leeftijd = prompt("voer je leeftijd in")
    
    stoppen = prompt("wil je stoppen? Y/N")

    stoppen = stoppen.toLowerCase();

    if(stoppen == "y" || stoppen == "stop"){
        namewrite()
    }
    else{
        opdr3()
    }
}
function namewrite(){
    document.write("Hallo " + naam + ", je leeftijd is " + leeftijd + " jaar")
}
