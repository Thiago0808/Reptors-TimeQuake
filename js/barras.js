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

    if (quantidadeSanidade<60){
        var questaoSilhueta = {nome: "questaoSilhueta", titulo: "Susto estranho", botao1: "Explorar as redondezas, tentando encontrar a criatura", botao2: "Seguir pela direita. Você acha que a criatura desapareceu por ali", texto: "A silhueta repentina da criatura, com os olhos vermelhos, apenas encara você, com um olhar sem vida. Após o susto inicial, você percebe que a criatura não te ataca, não rosna e mal se move. De repente, ela desaparece, diante de seus olhos. Confuso, você olha ao redor, procurando a criatura. Ela sumiu, realmente, deixando apenas uma estranha sensação familiar para trás. Você irá:",}
        conjuntoNorteador.push(questaoSilhueta)
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

