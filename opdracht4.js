
asknumber()



function asknumber(){
    getal = prompt("Voer een getal van 1-10 in")
    if(getal == 900){
        write()
    }
    else if(getal > 10 || getal < 1)
    {
        alert("Bereik van getal moet zijn: 1 t/m 10")
        asknumber()
    }
    else if(isNaN(getal)){
        alert("U dient een getal in te voeren")
        asknumber()
    }
    else{
        write()
    }
}

function write(){
    Y = 0;
    for(i = 0; i < getal; i++){
        Y = Y + 1
        for(x = 1; x < 901; x++){
            uitkomst = x*Y;
            document.write(x + " x " + Y + " = " + uitkomst + "<br>")
        }
        document.write("<br>")
    }
}
