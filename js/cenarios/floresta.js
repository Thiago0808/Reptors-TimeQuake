cenario = "floresta"
conjuntoAtual = "conjuntoNorteador"
questaoAtual = {nome: "questaoInicial", titulo: "O Tempo é o seu pior inimigo agora", opcao1: "Você ficará onde está, com medo de explorar as redondezas", opcao2: "Você irá explorar a selva, em busca de mantimentos", texto: "Você estava em 2131, testando a nova versão de sua máquina de tempo. A segurança não era algo que você priorizava. Ao realizar a viagem no tempo, você foi parar há 100 milhões de anos atrás. A máquina sofreu graves danos no processo, além de agravar ainda mais seus problemas neurológicos, o que te fez acordar apenas 5 dias depois de sua chegada a este mundo estranho. A máquina está tão danificada que está voltando no passado lentamente, de dia em dia. Você percebe que precisa sobreviver até o “primeiro dia”, ou seja, até a data em que você viajou para essa linha do tempo pare reverter o processo. Para isso, você deve manter no minímo 60% de sua vida e sanidade até lá. Você é sábio, sabe quais criaturas habitam nesse espaço-tempo. Ou, pelo menos, acha que sabe.",}

// var questaoExemplo = {nome: "", titulo: "", opcao1: "", opcao2: "", texto: "",}

// var questaoRefugio = {nome: "questaoRefugio", titulo: "Em Busca de Refúgio", opcao1: "Seguir em frente, por dentro da floresta", opcao2: "Seguir a direita, em direção ao rio", texto: "Você sente a urgente necessidade de achar um abrigo para passar as próximas horas. O ambiente demostra nenhum sinal de que possa haver um lugar seguro. Mesmo assim, você terá que optar por algum caminho para alcançar seu objetivo. Você irá: ",}


var questaoCaverna = {nome: "questaoCaverna", titulo: "Pedras ou folhas acima de sua cabeça", opcao1: "Entrar na caverna para ser seu abrigo", opcao2: "Ignorar a caverna e continuar explorando", texto: "Você avista uma caverna não muito distante de você, na qual pode ser um bom abrigo para você se instalar nos próximos dias. Entretanto, as criaturas da selva podem terem pensado a mesma coisa que você. Você não aguenta mais o frio que o ar livre lhe proporciona, mas teme que, o que tenha lá dentro, seja pior do que aqui fora. Você irá:",}
var questaoInseto = {nome:"questaoInseto", titulo: "PERIGO extremamente próximo", opcao1: "Pegar o inseto na mão, evitando irritar-lo", opcao2: "Bater no inseto, para matá-lo de uma vez", texto: "Você sente um formigamentos em suas costas. Você sabe que algum inseto pode ter entrado em sua camisa. Neste ambiente hostil, você sabe que poderá ser desde uma formiga inofensiva até uma terrível aranha venenosa. Você terá que elaborar uma estrátegia para preparar-se para o o que der e vier. Você irá:" };
var questaoBarulho = {nome: "questaoBarulho", titulo: "a melodia da selva", opcao1: "Ir investigar. Alguma hora irá precisar caçar", opcao2: "Afastar-se. Seu medo é maior que sua fome", texto: "Você ouve um barulho estranho atrás das árvores que estão mais adiante. Ao mesmo tempo que você teme que seja um animal feroz, você possui esperança de ser um bicho que poderá servir como alimentação. Você resolve:",}

questaoNorteadora = [questaoCaverna, questaoInseto, questaoBarulho]
norteadoraUsados = []


var questaoCoelho = {nome: "questaoCoelho", titulo: "A curiosidade, às vezes, salva", opcao1: "Andar em direção ao rio, em procura de mantimentos", opcao2: "Andar em direção contrária do rio, em procura de mantimentos", texto: "Você encontra um pequeno coelho indefeso. Você rapidamente pega o animal e o assa em uma fogueira improvisada. Quem diria que, para alguém como você, fosse útil possuir esses conhecimentos. Na verdade, coelhos existiam nessa época? Não importa. O que importa é que você irá agora:",}
var questaoJumpscareBarulho = {nome: "questaoJumpscareBarulho", titulo: "Por que uma escolha tem que ser tão cruel?", opcao1: "Procurar um rio para lavar sua ferida", opcao2: "Arrancar algumas folhas de árvore  para enfaixar sua ferida", texto: "O barulho era da última criatura na qual você gostaria de encontrar. Com a pata cheia de garras, ela arranha sua barriga e você grita de dor. O animal foge para longe, como se quisesse apenas brincar com os indefesos que há em seu território. Mesmo sangrando muito, você tenta manter a cabeça no lugar e decidir seu próximo passo em sua jornada. Você irá:",}

consequenciaBarulho = {questaoCoelho, questaoJumpscareBarulho}
barulhoUsados = []


var questaoAranha = {nome: "questaoAranha", titulo: "agonia de pequenas pernas", opcao1: "Seguir em frente, em direção às colinas", opcao2: "Sentar um pouco, você precisa descansar", texto: "Uma aranha rapidamente pulou em sua mão, esfregando suas pernas peludas em sua pele. Em desespero, você sacode sua mão, tentando derrubar ela, na qual surte efeito. Por um momento. Ela ligeiramente sobe uma árvore e pula diretamente em seu rosto. Assustado e agoniado, você esfrega suas mãos desesperamente em seu rosto, e a aranha cai novamente no chão, dessa vez indo para longe. Essa pequena criatura aparentou ter gostado de você. Mas agora, você precisará ignorar potenciais “amigos” e continuar seu caminho. Voce irá:",}

consequenciaInseto = [questaoAranha]
insetoUsados = []


function ativarConjuntoFloresta(botao){
    if (conjuntoAtual == "conjuntoNorteador"){
        if (questaoAtual.nome = "questaoInicial"){
            function cnf() // Controlador das questões Norteadoras da Floresta
        }
        else if (questaoAtual.nome = "questaoInseto"){
            if (botao == "botao1"){
                function cif() // Controlador das questões Norteadoras da Floresta
            }
            else{
                function cnf() // Controlador das questões Norteadoras da Floresta
            }
        }
    }
}
 
function cnf(){
    sorteado = sortearQuestao(questaoNorteadora.length, norteadoraUsados)
    questao = questaoNorteadora[sorteado]
    alterarTexto(questao)
    questaoAtual = questao
    conjuntoAtual = "conjuntoNorteador"
}