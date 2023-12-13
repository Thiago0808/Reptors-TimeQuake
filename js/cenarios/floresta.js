conjuntoAtual = "conjuntoNorteador"
questaoAtual = {nome: "questaoInicial", titulo: "O Tempo é o seu pior inimigo agora", botao1: "Você ficará onde está, com medo de explorar as redondezas", botao2: "Você irá explorar a selva, em busca de mantimentos", texto: "Você estava em 2131, testando a nova versão de sua máquina de tempo. A segurança não era algo que você priorizava. Ao realizar a viagem no tempo, você foi parar há 100 milhões de anos atrás. A máquina sofreu graves danos no processo, além de agravar ainda mais seus problemas neurológicos, o que te fez acordar apenas 5 dias depois de sua chegada a este mundo estranho. A máquina está tão danificada que está voltando no passado lentamente, de dia em dia. Você percebe que precisa sobreviver até o “primeiro dia”, ou seja, até a data em que você viajou para essa linha do tempo pare reverter o processo. Para isso, você deve manter no minímo 60% de sua vida e sanidade até lá. Você é sábio, sabe quais criaturas habitam nesse espaço-tempo. Ou, pelo menos, acha que sabe.",}

// var questaoExemplo = {nome: "", titulo: "", botao1: "", botao2: "", texto: "",}

// var questaoRefugio = {nome: "questaoRefugio", titulo: "Em Busca de Refúgio", botao1: "Seguir em frente, por dentro da floresta", botao2: "Seguir a direita, em direção ao rio", texto: "Você sente a urgente necessidade de achar um abrigo para passar as próximas horas. O ambiente demostra nenhum sinal de que possa haver um lugar seguro. Mesmo assim, você terá que optar por algum caminho para alcançar seu objetivo. Você irá: ",}


var questaoCaverna = {nome: "questaoCaverna", titulo: "Pedras ou folhas acima de sua cabeça", botao1: "Entrar na caverna para ser seu abrigo", botao2: "Ignorar a caverna e continuar explorando", texto: "Você avista uma caverna não muito distante de você, na qual pode ser um bom abrigo para você se instalar nos próximos dias. Entretanto, as criaturas da selva podem terem pensado a mesma coisa que você. Você não aguenta mais o frio que o ar livre lhe proporciona, mas teme que, o que tenha lá dentro, seja pior do que aqui fora. Você irá:",}
var questaoInseto = {nome:"questaoInseto", titulo: "PERIGO extremamente próximo", botao1: "Pegar o inseto na mão, evitando irritar-lo", botao2: "Bater no inseto, para matá-lo de uma vez", texto: "Você sente um formigamentos em suas costas. Você sabe que algum inseto pode ter entrado em sua camisa. Neste ambiente hostil, você sabe que poderá ser desde uma formiga inofensiva até uma terrível aranha venenosa. Você terá que elaborar uma estrátegia para preparar-se para o o que der e vier. Você irá:" };
var questaoBarulho = {nome: "questaoBarulho", titulo: "a melodia da selva", botao1: "Ir investigar. Alguma hora irá precisar caçar", botao2: "Afastar-se. Seu medo é maior que sua fome", texto: "Você ouve um barulho estranho atrás das árvores que estão mais adiante. Ao mesmo tempo que você teme que seja um animal feroz, você possui esperança de ser um bicho que poderá servir como alimentação. Você resolve:",}
var questaoPerigo = {nome: "questaoPerigo", titulo: "perigo infinito", botao1: "Continuar deitado, você está muito cansado", botao2: "Levantar, é muito perigoso ficar nessa posição ", texto: "De repente, você é atacado por uma criatura feroz, na qual você tanto admirava. Você cai para trás e fecha os olhos, esperando o pior. Seu medo superou sua inteligência e instinto de sobrevivência. Por sorte, ao abrir os olhos, a criatura tinha sumido. Você ainda fica deitado no chão, cansado da situação que se envolveu. Está valendo a pena tudo isso? Acho que não. Mas você precisa continuar. Você irá:",}

conjuntoNorteador = [questaoCaverna, questaoInseto, questaoBarulho, questaoPerigo]
norteadorUsados = []





var questaoCoelho = {nome: "questaoCoelho", titulo: "A curiosidade, às vezes, salva", botao1: "Andar em direção ao rio, em procura de mantimentos", botao2: "Andar em direção contrária do rio, em procura de mantimentos", texto: "Você encontra um pequeno coelho indefeso. Você rapidamente pega o animal e o assa em uma fogueira improvisada. Quem diria que, para alguém como você, fosse útil possuir esses conhecimentos. Na verdade, coelhos existiam nessa época? Não importa. O que importa é que você irá agora:",}
var questaoJumpscareBarulho = {nome: "questaoJumpscareBarulho", titulo: "Por que uma escolha tem que ser tão cruel?", botao1: "Procurar um rio para lavar sua ferida", botao2: "Arrancar algumas folhas de árvore  para enfaixar sua ferida", texto: "O barulho era da última criatura na qual você gostaria de encontrar. Com a pata cheia de garras, ela arranha sua barriga e você grita de dor. O animal foge para longe, como se quisesse apenas brincar com os indefesos que há em seu território. Mesmo sangrando muito, você tenta manter a cabeça no lugar e decidir seu próximo passo em sua jornada. Você irá:",}

conjuntoBarulho = [questaoCoelho, questaoJumpscareBarulho]
barulhoUsados = []


var questaoAranha = {nome: "questaoAranha", titulo: "agonia de pequenas pernas", botao1: "Seguir em frente, em direção às colinas", botao2: "Sentar um pouco, você precisa descansar", texto: "Uma aranha rapidamente pulou em sua mão, esfregando suas pernas peludas em sua pele. Em desespero, você sacode sua mão, tentando derrubar ela, na qual surte efeito. Por um momento. Ela ligeiramente sobe uma árvore e pula diretamente em seu rosto. Assustado e agoniado, você esfrega suas mãos desesperamente em seu rosto, e a aranha cai novamente no chão, dessa vez indo para longe. Essa pequena criatura aparentou ter gostado de você. Mas agora, você precisará ignorar potenciais “amigos” e continuar seu caminho. Voce irá:",}

conjuntoInseto = [questaoAranha]
insetoUsados = []

var questaoDormiu = {nome: "questaoDormiu", titulo: "o pior sono de sua vida", botao1: "Ignorar a picada e continuar explorando", botao2: "Pegar algumas frutas, na esperança que elas te façam melhorar", texto: "Você acaba dormindo sem querer. Você acorda apenas três horas depois, muito desonrientado. Você sente que sua mão está dormente. Ao olhar ela, havia um inseto impregnado em sua pele. No desespero, você arranca ele e o joga para longe. Vocẽ está enjoado e confuso. Por causa disso, você conclui que o inseto era venenoso. Você irá:",}

conjuntoSono = [questaoDormiu]
sonoUsados = []


var questaoFrutaBoa = {nome: "questaoFrutaBoa", titulo: "o desconhecido te cura", botao1: "Andar para a frente. Você não tem muita escolha mesmo", botao2: "Para a direita, em direção a parte mais densa da floresta", texto: "Não demorou muito para, após se alimentar das frutas, você se sente um pouco melhor. Mas foi arriscado. Havia a possibilidade das frutas serem tóxicas e fazer com que o seu fim chegasse mais rapidamente. Você fica decepcionado consigo mesmo por não ter olhado melhor o seu antigo livro de sobrevivencia. Enfim, vocẽ não tinha muito tempo em sua rotina para esse tipo de leitura. Com as forças mais restauradas, você irá:",}
var questaoFrutaRuim = {nome: "questaoFrutaRuim", titulo: "o desconhecido te mata", botao1: "Andar para a frente. Você não tem muita escolha mesmo", botao2: "Para a direita, em direção a parte mais densa da floresta", texto: "Não demorou muito para, após se alimentar das frutas, você se sente pior do que antes. Foi arriscado. Você sabia que havia a possibilidade das frutas serem tóxicas e fazer com que o seu fim chegasse mais rapidamente. Você fica decepcionado consigo mesmo por não ter olhado melhor o seu antigo livro de sobrevivencia. Enfim, vocẽ não tinha muito tempo em sua rotina para esse tipo de leitura. Com as forças ainda mais reduzidas, você irá:",}

conjuntoFrutas = [questaoFrutaBoa, questaoFrutaRuim]
frutasUsados = []



function ativarConjuntoFloresta(botao){
    if (conjuntoAtual == "conjuntoNorteador"){
        if (questaoAtual.nome == "questaoInicial"){
            cnf() // Controlador das questões Norteadoras da Floresta
        }
        else if (questaoAtual.nome == "questaoInseto"){
            if (botao == "botao1"){
                cif() // Controlador das questões de Inseto da Floresta
            }
            else{
                cnf() // Controlador das questões Norteadoras da Floresta
            }
        }
        else if (questaoAtual.nome == "questaoBarulho"){
            if (botao == "botao1"){
                cbf() // Controlador das questões de Barulho da Floresta
            }
            else{
                cnf() // Controlador das questões Norteadoras da Floresta
            }
        }
        else if (questaoAtual.nome == "questaoCaverna"){
            if (botao == "botao1"){
                mudarCenario("caverna")
            }
            else{
                cnf() // Controlador das questões Norteadoras da Floresta
            }
        }
        else if (questaoAtual.nome == "questaoPerigo"){
            if (botao == "botao1"){
                csf() // Controlador das questões de Sono da Floresta
            }
            else{
                cnf() // Controlador das questões Norteadoras da Floresta
            }
        }
    }
    else if (conjuntoAtual == "conjuntoSono"){
        if (questaoAtual.nome == "questaoDormiu"){
            if (botao == "botao1"){
                cnf() // Controlador das questões Norteadoras da Floresta
            }
            else{
                cff() // Controlador das questões de Frutas da Floresta
            }
        }
    }
    else if (conjuntoAtual == "conjuntoFrutas" || conjuntoAtual == "conjuntoInseto"){
        cnf() // Controlador das questões Norteadoras da Floresta
    }
}
 
function cnf(){
    sorteado = sortearQuestao(conjuntoNorteador.length, norteadorUsados)
    questao = conjuntoNorteador[sorteado]
    alterarTexto(questao)
    questaoAtual = questao
    conjuntoAtual = "conjuntoNorteador"
    consequenciasFloresta(questao)
}

function cif(){
    sorteado = sortearQuestao(conjuntoInseto.length, insetoUsados)
    questao = conjuntoInseto[sorteado]
    alterarTexto(questao)
    questaoAtual = questao
    conjuntoAtual = "conjuntoInseto"
    consequenciasFloresta(questao)
}

function cbf(){
    sorteado = sortearQuestao(conjuntoBarulho.length, barulhoUsados)
    questao = conjuntoBarulho[sorteado]
    alterarTexto(questao)
    questaoAtual = questao
    conjuntoAtual = "conjuntoBarulho"
    consequenciasFloresta(questao)
}

function csf(){
    sorteado = sortearQuestao(conjuntoSono.length, sonoUsados)
    questao = conjuntoSono[sorteado]
    alterarTexto(questao)
    questaoAtual = questao
    conjuntoAtual = "conjuntoSono"
    consequenciasFloresta(questao)
}

function cff(){
    sorteado = sortearQuestao(conjuntoFrutas.length, frutasUsados)
    questao = conjuntoFrutas[sorteado]
    alterarTexto(questao)
    questaoAtual = questao
    conjuntoAtual = "conjuntoFrutas"
    consequenciasFloresta(questao)
}

function consequenciasFloresta(questao){
    if (conjuntoAtual == "conjuntoNorteador"){
        if (questaoAtual.nome == "questaoPerigo"){
            console.log("Oi")
            alterarSanidade("perde")
            ativarJumpscare()
        }
    }
    else if (conjuntoAtual == "conjuntoInseto"){
        if (questaoAtual.nome == "questaoAranha"){
            alterarSanidade("perde")
        }
    }
    else if (conjuntoAtual == "conjuntoBarulho"){
        if (questaoAtual.nome == "questaoJumpscareBarulho"){
            alterarSanidade("perde")
            alterarVida("perde")
            ativarJumpscare()
        }
    }
    else if (conjuntoAtual == "conjuntoFrutas"){
        if (questaoAtual.nome == "questaoFrutaBoa"){
            alterarVida("ganha")
        }
        if (questaoAtual.nome == "questaoFrutaRuim"){
            alterarVida("perde")
        }
    }
}