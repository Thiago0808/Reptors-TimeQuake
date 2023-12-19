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

primeiraVez = true
function alterarSanidade(alteracao){
    if (alteracao == "ganha" && verificarSanidade()<100){
        quantidadeSanidade += 10;

        let icone = document.querySelector(".sanidade");
        tremerIcone(icone)
    }
    else if (alteracao == "perde"){
        quantidadeSanidade -= 10;

        let icone = document.querySelector(".sanidade");
        tremerIcone(icone)
    }

    if (quantidadeSanidade == 0 ){
        //Função de Enlouquecer
    }
    else{
        barraSanidade.value = quantidadeSanidade
        porcentagemSanidade.innerHTML = quantidadeSanidade+"%"
    }

    if (quantidadeSanidade<110 && primeiraVez){
        primeiraVez = false
        var questaoSilhueta = {nome: "questaoSilhueta", titulo: "Susto estranho", botao1: "Explorar as redondezas, tentando encontrar a criatura", botao2: "Seguir pela direita. Você acha que a criatura desapareceu por ali", texto: "A silhueta repentina da criatura, com os olhos vermelhos, apenas encara você, com um olhar sem vida. Após o susto inicial, você percebe que a criatura não te ataca, não rosna e mal se move. De repente, ela desaparece, diante de seus olhos. Confuso, você olha ao redor, procurando a criatura. Ela sumiu, realmente, deixando apenas uma estranha sensação familiar para trás. Você irá:",}
        conjuntoNorteador.push(questaoSilhueta)

        var questaoEsquisita = {nome: "questaoEsquisita", titulo: "Susto peculiar", botao1: "Aceitar o confronto e lutar contra a criatura", botao2: "Recuar e procurar uma rota alternativa para evitar o confronto", texto: "A criatura surge diante de você, emitindo um rugido. Essa criatura é mais esquisita das que você já lidou. Mesmo assim, o desespero é o mesmo, e a criatura parece te confrontar. Você irá:",}
        conjuntoNorteador.push(questaoEsquisita)
    }
}

function alterarVida(alteracao){
    if (alteracao == "ganha" && verificarVida()<100){
        quantidadeVida += 10;

        let icone = document.querySelector(".vida");
        tremerIcone(icone)
    }
    else  if (alteracao == "perde"){
        quantidadeVida -= 10;

        let icone = document.querySelector(".vida");
        tremerIcone(icone)
    }

    if (quantidadeVida == 0 ){
        //Função de Morrer
    }
    else{
        barraVida.value = quantidadeVida
        porcentagemVida.innerHTML = quantidadeVida+"%"
    }
}

