let body = document.querySelector("body")
let divJumpscare = document.getElementById("divJumpscare")
let imgJumpscare = document.getElementById("imgJumpscare")

jumpscareUsados= [0];

function ativarJumpscare(){
    sorteado = sortearJumpscare()
    body.classList.add("bloquear")
    divJumpscare.style.display="block"
    imgJumpscare.src = "view/img/jumpscare/dinoNormal"+sorteado+".png"
}

function sortearJumpscare(){
    permitidos = numerosPermitidos(5, jumpscareUsados);




    if (permitidos.length>0){
        condicao = true
        while (condicao){
            sorteado = Math.ceil(Math.random()*5)
            sorteado --;
            for (let i=0; i<permitidos.length; i++){
                //console.log(usados[i], sorteado)
                if (permitidos[i] == sorteado){
                    condicao = false
                }
            }
        }
    }

    jumpscareUsados.push(sorteado);
    return sorteado
}

divJumpscare.addEventListener("click", function(){
    divJumpscare.style.display="none"
    body.classList.remove("bloquear")
})