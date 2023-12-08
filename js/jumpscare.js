let body = document.getElementById("body")
let divJumpscare = document.getElementById("divJumpscare")
let imgJumpscare = document.getElementById("imgJumpscare")

jumpscareUsados= [];

function ativarJumpscare(){
    sorteado = sortearJumpscare()

    alterarSanidade("perde");

    body.classList.add("corpo")
    divJumpscare.style.display="block"
    imgJumpscare.src = "../img/jumpscare/jumpscare"+sorteado+".jpg"
}

function sortearJumpscare(){
    sorteado = Math.ceil(Math.random()*5)

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
    body.classList.remove("corpo")
    //Função de ir pra próxima questão
})