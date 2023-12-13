let body = document.querySelector("body")
let divJumpscare = document.getElementById("divJumpscare")
let imgJumpscare = document.getElementById("imgJumpscare")

jumpscareUsados= [];

function ativarJumpscare(){
    sorteado = sortearJumpscare()
    body.classList.add("bloquear")
    divJumpscare.style.display="block"
    imgJumpscare.src = "view/img/jumpscare/jumpscare"+sorteado+".png"
}

function sortearJumpscare(){
    sorteado = Math.ceil(Math.random()*1)

    for (let i=0; i<jumpscareUsados.length; i++){
        if (jumpscareUsados[i] = sorteado){
            sortearJumpscare()
        }
    }
    jumpscareUsados.push(sorteado);
    return sorteado
}

divJumpscare.addEventListener("click", function(){
    divJumpscare.style.display="none"
    body.classList.remove("bloquear")
    //Função de ir pra próxima questão
})