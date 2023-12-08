botoes = document.querySelectorAll("button")

titulo = document.getElementById("titulo")
texto = document.getElementById("texto")
opcao1 = document.getElementById("opcao1")
opcao2 = document.getElementById("opcao2")

function sortearQuestao(limite, usados){
    sorteado = Math.ceil(Math.random()*limite)

    for (let i=0; i<usados.length; i++){
        if (usados[i] = sorteado){
            sortearQuestao(limite, usados)
        }
    }
    usados.push(sorteado);

    return sorteado
}

function alterarTexto(questao){
    titulo.innerHTML = questao.titulo
    texto.innerHTML = questao.texto
    opcao1.innerHTML = questao.opcao1
    opcao2.innerHTML = questao.opcao2
}


for (let i = 0; i < botoes.length; i ++){
    botoes[i],addEventListener("click", function(){
        switch(cenario){
            case "floresta":
                //Funcao de ir pra Floresta
                break;
            case "caverna":
                //Funcao de ir pra Caverna
                break;
        }
    })
}

