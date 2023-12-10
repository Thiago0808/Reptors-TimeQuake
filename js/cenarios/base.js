titulo = document.getElementById("titulo")
texto = document.getElementById("texto")
botao1 = document.getElementById("botao1")
botao2 = document.getElementById("botao2")

botoes = [botao1, botao2]

function sortearQuestao(limite, usados){
    sorteado = Math.ceil(Math.random()*limite)
    sorteado --;

    if (usados.length>0){
        for (let i=0; i<usados.length; i++){
            //console.log(usados[i], sorteado)
            if (usados[i] == sorteado){
                sortearQuestao(limite, usados)
            }
        }
    }
    console.log("Teste")

    usados.push(sorteado);
    console.log(usados)

    return sorteado
}

function alterarTexto(questao){
    titulo.innerHTML = questao.titulo
    texto.innerHTML = questao.texto
    botao1.innerHTML = questao.botao1
    botao2.innerHTML = questao.botao2
}




for (let i = 0; i < botoes.length; i ++){
    botoes[i].addEventListener("click", function(){
        switch(cenario){
            case "floresta":
                ativarConjuntoFloresta(botoes[i].value)
                break;
            case "caverna":
                //Funcao de ir pra Caverna
                break;
        }
    })
}

