let diaAtual = document.getElementById("diaAtual")

dia = 5
escolhasRestantes = 15

function escolhaTomada(){
    escolhasRestantes --;

    if (escolhasRestantes == 12){
        mudarDia()
    }
    else if (escolhasRestantes == 9){
        mudarDia()
    }
    else if (escolhasRestantes == 6){
        mudarDia()
    }
    else if (escolhasRestantes == 3){
        mudarDia()
    }
    else if (escolhasRestantes == 0){
        mudarDia()
    }

}

function mudarDia(){
    dia --;

    setTimeout(() => {
        diaAtual.innerHTML = "dia "+dia
    }, 1500);

    if (dia == 0){
        cenario = "final"
    }

    animarDia(diaAtual)

}