let diaAtual = document.getElementById("diaAtual")

dia = 5
escolhasRestantes = 15

function escolhaTomada(){
    escolhasRestantes --;

    if (escolhasRestantes==12){
        mudarDia()
    }
    else if (escolhasRestantes==9){
        mudarDia()
    }
    else if (escolhasRestantes==6){
        mudarDia()
    }
    else if (escolhasRestantes==3){
        mudarDia()
    }
    else if (escolhasRestantes==0){
        mudarDia()
    }

}

function mudarDia(){
    dia --;

    if (dia == 0){
        //Funcção de Finalizar Jogo
    }
    else{
        diaAtual.innerHTML = "dia "+dia
    }

}