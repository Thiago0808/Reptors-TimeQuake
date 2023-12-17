function tremerIcone(icone){
    icone.classList.remove("animate__fadeInLeft")
    
    icone.classList.add("animate__headShake")
    icone.classList.add("animate__infinite")
    icone.classList.add("infinite")

    setTimeout(() => {
        icone.classList.remove("animate__headShake");
        icone.classList.remove("animate__infinite");
        icone.classList.remove("infinite");
    }, 1000);
}