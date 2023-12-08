botoes = document.querySelectorAll("button")

for (let i=0; i<botoes.length; i++){
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
