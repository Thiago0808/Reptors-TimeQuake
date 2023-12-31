let body = document.querySelector("body")
let divJumpscare = document.getElementById("divJumpscare")
let imgJumpscare = document.getElementById("imgJumpscare")

jumpscareUsados= [0];
jumpscareFantasmaUsados= [0];

function ativarJumpscare(){
    sorteado = sortearJumpscare()
    imgJumpscare.src = "view/img/jumpscare/dinoNormal"+sorteado+".png"
    setTimeout(() => {
        divJumpscare.style.display="block"
        body.classList.add("bloquear")
        ativarSomJumpscare()
        finalizarJumpscare()
    }, 500);
}

function sortearJumpscare(){
    permitidos = numerosPermitidos(6, jumpscareUsados);
    if (permitidos.length>0){
        condicao = true
        while (condicao){
            sorteado = Math.ceil(Math.random()*6)
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
            imgJumpscare.src = ""
        }, duracao);
    };	
}

// Fantasma
function ativarJumpscareFantasma(){
    sorteado = sortearJumpscareFantasma()
    imgJumpscare.src = "view/img/jumpscare/dinoFantasma"+sorteado+".png"
    setTimeout(() => {
        console.log(sorteado)
        divJumpscare.style.display="block"
        body.classList.add("bloquear")
        ativarSomJumpscareFantasma()
        finalizarJumpscare()
    }, 500);
}

function sortearJumpscareFantasma(){
    permitidos = numerosPermitidos(3, jumpscareFantasmaUsados)
    console.log(permitidos)
    if (permitidos.length>0){
        condicao = true
        while (condicao){
            sorteado = Math.ceil(Math.random()*3)
            for (let i=0; i<permitidos.length; i++){
                if (permitidos[i] == sorteado){
                    condicao = false
                }
            }
        }
    }

    jumpscareFantasmaUsados.push(sorteado)
    return sorteado
}

