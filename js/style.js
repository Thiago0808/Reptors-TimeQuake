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

function tremerDia(dia){
    dia.classList.remove("animate__fadeIn")
    dia.classList.remove("animate__delay-5s")

    dia.classList.add("animate__wobble")
    dia.classList.add("animate__infinite")
    dia.classList.add("infinite")

    setTimeout(() => {
        dia.classList.remove("animate__wobble");
        dia.classList.remove("animate__infinite");
        dia.classList.remove("infinite");
    }, 1000);
}