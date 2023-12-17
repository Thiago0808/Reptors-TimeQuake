function tremerIcone(icone){
    icone.classList.add("animate__headShake animate__infinite infinite")

    setTimeout(() => {
        icone.classList.remove("animate__headShake animate__infinite infinite");
    }, 1000);
}