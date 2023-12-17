var questaoEntrada = {nome: "questaoEntrada", titulo: "Pedras e mais pedras", botao1: "Para a direita. Pelo menos não há barulhos", botao2: "Para a esquerda. Pelo menos não há frio e escuridão ", texto: "A caverna é fria e escura, pelo menos não tanto quanto lá fora. Seus instintos imploram para voltar, mas você persiste em ficar na caverna. Há dois caminhos: um à direita, onde está ainda mais escuro e frio, e outro à esquerda, onde há barulhos estranhos. Você irá:",}


var questaoExemplo = {nome: "", titulo: "", botao1: "", botao2: "", texto: "",}



var questaoSaida = {nome: "questaoSaida", titulo: "só há pedras", botao1: "Sair da caverna. Não tem mais o que explorar", botao2: "Continuar na caverna. Você considera a possibilidade de haver mais alguma coisa", texto: "Você percebe que não há o que explorar na caverna. O chão é úmido e não parece um ambiente seguro. Você encontra uma saída da caverna logo adiante de você. Você irá:",}
var questaoRupestre = {nome: "questaoRupestre", titulo: "A história se perdeu", botao1: "Voltar ao caminho que fez. É mais seguro", botao2: "Continuar o caminho, para explorar mais", texto: "Quanta surpresa. Ao se debruçar para olhar as paredes da caverna, você encontra desenhos rupestres. Isso não faz o menor sentido. As ilustrações são de humanos lutando contra dinossauros. Isso faz ainda menos sentido. Você acaba tendo a péssima ideia de passar as mãos pelos desenhos. A parede está cheia pontas de pedras pequenas pontiagudas que você não percebeu. Você seca o sangue das mãos em sua própria roupa. Você irá:",}
var questaoBifurcacao = {nome: "questaoBifurcacao", titulo: "Uma dúvida cruel", botao1: "Seguir a trilha estreita para investigar os murmúrios.", botao2: "Optar pela trilha mais segura, mas envolta em sombras.", texto: "No caminho pela caverna, você se depara com bifurcações misteriosas. Uma trilha leva a uma passagem estreita, onde você ouve murmúrios distantes. A outra trilha parece mais segura, mas está envolta em sombras densas. Você irá:",}

conjuntoEntrada = [questaoSaida, questaoRupestre, questaoBifurcacao]
entradaUsados = []


var questaoMurmurios = {nome: "questaoMurmurios", titulo: "Encontrado seus semelhantes", botao1: "Para a sala oculta, para confrontar os vultos", botao2: "Retornar o caminho, é perigoso demais avançar", texto: "Você avança cautelosamente pelo corredor apertado. Os murmúrios se intensificam, revelando vozes sussurrantes. À medida que avança, percebe que as vozes parecem ecoar de uma sala oculta. Ao chegar, você vê vultos humanóides. Você se questiona se há possibilidade de humanos neste espaço-tempo. Se sim, a máquina do tempo afetou mais a realidade do que imaginava. Você irá:",}

conjuntoMurmurios = [questaoMurmurios]
murmuriosUsados = []


var questaoMochila = {nome: "questaoMochila", titulo: "Inesperado, mas útil", botao1: "Você pega a mochila. Vai ser um ótimo armazenamento", botao2: "Você ignora a mochila. Os possíveis humanos podem sentir falta", texto: "Você chega na sala oculta, mas os vultos já desapareceram. Você explora o lugar e encontra uma espécie de mochila de couro",}

conjuntoMochila = [questaoMochila]
mochilaUsados = []

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
            else if(questaoAtual.nome == "questaoSaida"){
                if (botao == "botao1"){
                    mudarCenario("floresta")
                    cnf() // Controlador das questões Norteadoras da Floresta
                }
                else{
                    cec() // Controlador das questões de Entrada da Caverna
                }            }
            else if(questaoAtual.nome == "questaoRupestre"){
                cec() // Controlador das questões de Entrada da Caverna
            }
            else if (questaoAtual.nome == "questaoBifurcacao"){
                if (botao == "botao1"){
                    cmuc() // Controlador das questões de Murmurios da Caverna
                }
                else{
                    cec() // Controlador das questões de Entrada da Caverna
                }
            }
            else if(questaoAtual.nome == "questaoExpulso"){
                mudarCenario("floresta")
                cnf() // Controlador das questões Norteadoras da Floresta            
            }
        }
        else if (conjuntoAtual == "conjuntoMurmurios"){
            if (questaoAtual.nome == "questaoMurmurios"){
                if (botao == "botao1"){
                    cmoc() // Controlador das questões da Mochila da Caverna
                }
                else{
                    cec() // Controlador das questões de Entrada da Caverna
                }
            }
        }
        else if (conjuntoAtual == "conjuntoMochila"){
            if (questaoAtual.nome == "questaoMochila"){
                if (botao == "botao1"){
                    alterarVida("ganha")
                    cec() // Controlador das questões de Entrada da Caverna
                }
                else{
                    cec() // Controlador das questões de Entrada da Caverna
                }
            }
        }
    }
}

function cec(){
    if (conjuntoEntrada.length != entradaUsados.length){
        sorteado = sortearQuestao(conjuntoEntrada.length, entradaUsados)
        questao = conjuntoEntrada[sorteado]
    }
    else{
        questao = {nome: "questaoExpulso", titulo: "Luz no fim da caverna", botao1: "Para a saída da esquerda, por causa da claridade", botao2: "Para a saída da direita. Você gosta de aventuras", texto: "Você chega no final do caminho e encontra duas saídas da caverna. A da esquerda está com mais claridade, por causa da ausência de árvores, e a da direita leva você para um lugar cheio de lama. Você irá:",}
    }
    alterarTexto(questao)
    questaoAtual = questao
    conjuntoAtual = "conjuntoEntrada"
    consequenciasCaverna(questao)
}

function cmuc(){
    sorteado = sortearQuestao(conjuntoMurmurios.length, murmuriosUsados)
    questao = conjuntoMurmurios[sorteado]
    alterarTexto(questao)
    questaoAtual = questao
    conjuntoAtual = "conjuntoMurmurios"
    consequenciasCaverna(questao)
}

function cmoc(){
    sorteado = sortearQuestao(conjuntoMochila.length, mochilaUsados)
    questao = conjuntoMochila[sorteado]
    alterarTexto(questao)
    questaoAtual = questao
    conjuntoAtual = "conjuntoMochila"
    consequenciasCaverna(questao)
}


function consequenciasCaverna(questao){
    if (conjuntoAtual == "conjuntoEntrada"){
        if (questaoAtual.nome == "questaoRupestre"){
            alterarVida("perde")
        }
    }
    else if (conjuntoAtual == "conjuntoInseto"){
        if (questaoAtual.nome == "questaoAranha"){
            alterarSanidade("perde")
        }
    }
}
