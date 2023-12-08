let barraSanidade = document.getElementById("barraSanidade")
let barraVida = document.getElementById("barraVida")

let porcentagemSanidade = document.getElementById("porcentagemSanidade")
let porcentagemVida = document.getElementById("porcentagemVida")

quantidadeSanidade = 100
quantidadeVida = 100

function verificarSanidade(){
    return quantidadeSanidade;
}

function verificarVida(){
    return quantidadeVida;
}

function alterarSanidade(numero){
    quantidadeSanidade += numero;

    if (quantidadeSanidade == 0 ){
        //Função de Enlouquecer
    }
    else{
        barraSanidade.value = quantidadeSanidade
        porcentagemSanidade.innerHTML = quantidadeSanidade+"%"
    }
}

function alterarVida(numero){
    quantidadeVida += numero;

    if (quantidadeVida == 0 ){
        //Função de Morrer
    }
    else{
        barraVida.value = quantidadeVida
        porcentagemVida.innerHTML = quantidadeVida+"%"
    }
}

