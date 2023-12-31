som = document.querySelectorAll(".som")
audio = document.getElementById("audio")
audioJumpscare = document.getElementById("somJumpscare")
sourceJumpscare = document.getElementById("sourceJumpscare")
estado = "on"

audio.play()


for (let i = 0; i < som.length; i ++){
    som[i].addEventListener("click", function(){
        som[0].classList.remove("animate__animated");
        som[1].classList.remove("animate__animated");

        som[0].classList.toggle("none");
        som[1].classList.toggle("none");

        if (estado == "off"){
            audio.play()
            estado = "on"
        }
        else{
            audio.pause()
            estado = "off"
        }

    })
}

sonsUsados = [0]

function ativarSomJumpscare(){
    sorteado = sortearSom()
    sourceJumpscare.src = "view/audios/audiosJumpscare/jumpscareNormal"+sorteado+".mp3"
    audioJumpscare.load()
    audioJumpscare.play()
}

function sortearSom(){
    permitidos = numerosPermitidos(8, sonsUsados);
    if (permitidos.length>0){
        condicao = true
        while (condicao){
            sorteado = Math.ceil(Math.random()*8)
            for (let i=0; i<permitidos.length; i++){
                //console.log(usados[i], sorteado)
                if (permitidos[i] == sorteado){
                    condicao = false
                }
            }
        }
    }
    console.log("Áudio Nº: "+sorteado)

    sonsUsados.push(sorteado);
    return sorteado
}

//Fantasma 
sonsFantasmaUsados = [0]

function ativarSomJumpscareFantasma(){
    sorteado = sortearSomFantasma()
    sourceJumpscare.src = "view/audios/audiosJumpscare/jumpscareFantasma"+sorteado+".mp3"
    audioJumpscare.load()
    audioJumpscare.play()
}

function sortearSomFantasma(){
    permitidos = numerosPermitidos(5, sonsFantasmaUsados);
    if (permitidos.length>0){
        condicao = true
        while (condicao){
            sorteado = Math.ceil(Math.random()*5)
            for (let i=0; i<permitidos.length; i++){
                //console.log(usados[i], sorteado)
                if (permitidos[i] == sorteado){
                    condicao = false
                }
            }
        }
    }
    console.log("Áudio Nº: "+sorteado)

    sonsFantasmaUsados.push(sorteado);
    return sorteado
}






