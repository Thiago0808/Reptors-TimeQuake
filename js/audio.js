som = document.querySelectorAll(".som")
audio = document.getElementById("audio")

estado = "off"

for (let i = 0; i < som.length; i ++){
    som[i].addEventListener("click", function(){
        som[0].classList.remove("animate__animated");
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




