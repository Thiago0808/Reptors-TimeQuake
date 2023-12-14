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

function alterarSanidade(alteracao){
    if (alteracao == "ganha" && verificarSanidade()<100){
        quantidadeSanidade += 10;
    }
    else  if (alteracao == "perde"){
        quantidadeSanidade -= 10;
    }

    if (quantidadeSanidade == 0 ){
        //Função de Enlouquecer
    }
    else{
        barraSanidade.value = quantidadeSanidade
        porcentagemSanidade.innerHTML = quantidadeSanidade+"%"
    }
}

function alterarVida(alteracao){
    if (alteracao == "ganha" && verificarVida()<100){
        quantidadeVida += 10;
    }
    else  if (alteracao == "perde"){
        quantidadeVida -= 10;
    }

    if (quantidadeVida == 0 ){
        //Função de Morrer
    }
    else{
        barraVida.value = quantidadeVida
        porcentagemVida.innerHTML = quantidadeVida+"%"
    }
}

