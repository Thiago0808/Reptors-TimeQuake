body = document.querySelector("body")
titulo = document.getElementById("titulo")
texto = document.getElementById("texto")
botao1 = document.getElementById("botao1")
botao2 = document.getElementById("botao2")

botoes = [botao1, botao2]

var cenario = "floresta"

function mudarCenario(Cenario){
    imagem = "url(view/img/cenarios/cenario"+Cenario+".jpg)"
    console.log(imagem)

    body.style.backgroundImage = imagem
}


function removerElementosValor(array, valor) {
    var i = array.length;
    while (i--) {
        if (array[i] === valor) {
            array.splice(i, 1);
        }
    }
    return array;
}

function numerosPermitidos(limite, usados){
    permitidos = []
    n = 0;
    while (n<limite){
        permitidos.push(n)
        n++;
    }
    

    for (let i=0; i<permitidos.length; i++){
        for (let j=0; j<usados.length; j++){
            if (permitidos[i] == usados[j] ){
                permitidos[i] = -1;    
            }
        
        }
    }

    permitidos = removerElementosValor(permitidos, -1)

    return permitidos;

}

function sortearQuestao(limite, usados){
    permitidos = numerosPermitidos(limite, usados);

    if (permitidos.length>0){
        condicao = true
        while (condicao){
            sorteado = Math.ceil(Math.random()*limite)
            sorteado --;
            for (let i=0; i<permitidos.length; i++){
                //console.log(usados[i], sorteado)
                if (permitidos[i] == sorteado){
                    condicao = false
                }
            }
        }
    }

    usados.push(sorteado);

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
                ativarConjuntoCaverna(botoes[i].value)
                break;
        }
    })
}

