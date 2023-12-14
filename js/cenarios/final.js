
var finalBom = {nome: "finalBom", titulo: "sobrevivente, por enquanto", botao1: "Reiniciar. Você ainda tem que concluir seu objetivo", botao2: "Desistir. Você já perdeu muita coisa", texto: "É, você conseguiu. Você sobreviveu 5 dias neste terrível lugar. Está pronto para usar a máquina do tempo e voltar para casa. Para, provavelmente, você fazer essa mesma viagem mais e mais vezes. Sua ambição é maior que seu amor e, até mesmo, que sua inteligência. Mas, não serei eu que te parará agora. Você irá:",}

var finalVida = {nome: "finalVida", titulo: "apenas ossos", botao1: "Reiniciar. Você quer descobrir outros caminhos", botao2: "Desistir. Para que sofrer mais?", texto: "Você chegou ao dia em que voltaria para sua casa. No entanto, seus ferimentos impedem que você chegue à máquina do tempo. Você vai se arrastando no chão na esperança de voltar a sua antiga vida. Mas seus olhos pesam e seu corpo não aguenta mais continuar. Você desiste. Seu fim chegou.",}

var finalSanidade = {nome: "finalSanidade", titulo: "traumas por todos os lados", botao1: "Reiniciar. Você quer descobrir outros caminhos", botao2: "Desistir. Para que sofrer mais?", texto: "Você chegou ao dia em que voltaria para sua casa. Você se aproxima da máquina do tempo para poder voltar a sua antiga vida, mas você está confuso demais para conseguir usar a máquina. As vozes em sua cabeça te perturbam cada vez mais e você não consegue mais distinguir a realidade da fantasia. Você tentou voltar a sua realidade, mas você está louco demais para conseguir isso. Você ficará preso neste mundo hostil, até o fim de sua vida, o que não demorará. ",}


function ativarFinal(){
    cenario = "ultimo"
    if (verificarSanidade()>60 && verificarVida()>60){
        alterarTexto(finalBom)
        mudarCenario("FinalBom")
    }
    else if (verificarSanidade()>60 && verificarVida()<60){
        alterarTexto(finalVida)
        mudarCenario("FinalVida")
    }
    else if(verificarSanidade()<60 && verificarVida()>60){
        alterarTexto(finalSanidade)
        mudarCenario("FinalSanidade")
    }
    else{
        console.log("Tela de Ambos dando ruim")
    }
}

function ativarUltimo(botao){
    if (botao == "botao1"){
        location.reload();
    }
    else if (botao == "botao2"){
        window.close()
    }

}