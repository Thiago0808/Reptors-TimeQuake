function tremerIcone(icone){
    icone.classList.remove("animate__fadeInLeft")
    icone.classList.remove("animate__delay-3s")
    icone.classList.remove("animate__delay-4s")

    icone.classList.add("animate__wobble")
    icone.classList.add("animate__infinite")
    icone.classList.add("infinite")

    setTimeout(() => {
        icone.classList.remove("animate__wobble");
        icone.classList.remove("animate__infinite");
        icone.classList.remove("infinite");
    }, 1000);
}

function animarDia(dia){
    dia.classList.remove("animate__fadeIn")
    dia.classList.remove("animate__delay-5s")

    dia.classList.add("animate__fadeOut")

    setTimeout(() => {
        dia.classList.remove("animate__fadeOut")
        dia.style.display = "none"
    }, 1000);

    setTimeout(() => {
        dia.style.display = "block"
        dia.classList.add("animate__fadeIn")
    },2000)
}