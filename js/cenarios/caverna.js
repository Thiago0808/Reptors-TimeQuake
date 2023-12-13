var questaoEntrada = {nome: "questaoEntrada", titulo: "Pedras e mais pedras", botao1: "Para a direita. Pelo menos não há barulhos", botao2: "Para a esquerda. Pelo menos não há frio e escuridão ", texto: "A caverna é fria e escura, pelo menos não tanto quanto lá fora. Seus instintos imploram para voltar, mas você persiste em ficar na caverna. Há dois caminhos: um à direita, onde está ainda mais escuro e frio, e outro à esquerda, onde há barulhos estranhos. Você irá:",}


var questaoSaida = {nome: "questaoSaida", titulo: "só há pedras", botao1: "Sair da caverna. Não tem mais o que explorar", botao2: "Continuar na caverna. Você considera a possibilidade de haver mais alguma coisa", texto: "Você percebe que não há o que explorar na caverna. O chão é úmido e não parece um ambiente seguro. Você encontra uma saída da caverna logo adiante de você. Você irá:",}

conjuntoEntrada = [questaoSaida]
entradaUsados = []

function ativarConjuntoCaverna(botao){
    if (botao == "inicial"){

        alterarTexto(questaoEntrada)
    }
    else{

        if (conjuntoAtual == "conjuntoEntrada"){

            if (questaoAtual.nome == "questaoEntrada"){

                if (botao == "botao1"){
                    ativarJumpscare()
                }
                else{
                    cec() // Controlador das questões de Entrada da Caverna
                }
            }
        }
    }
}

function cec(){
    sorteado = sortearQuestao(conjuntoEntrada.length, entradaUsados)
    questao = conjuntoEntrada[sorteado]
    alterarTexto(questao)
    questaoAtual = questao
    conjuntoAtual = "conjuntoEntrada"
    //consequenciasFloresta(questao)
}

