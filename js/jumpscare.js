let body = document.querySelector("body")
let divJumpscare = document.getElementById("divJumpscare")
let imgJumpscare = document.getElementById("imgJumpscare")

jumpscareUsados= [0];

function ativarJumpscare(){
    sorteado = sortearJumpscare()
    body.classList.add("bloquear")
    divJumpscare.style.display="block"
    imgJumpscare.src = "view/img/jumpscare/dinoNormal"+sorteado+".png"
    ativarSomJumpscare()
    finalizarJumpscare()
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

function finalizarJumpscare(){
    audioJumpscare.onloadeddata = function() {
        var duracao = (audioJumpscare.duration*1000)
        setTimeout(() => {
            divJumpscare.style.display="none"
            body.classList.remove("bloquear")
        }, duracao);
    };	


}