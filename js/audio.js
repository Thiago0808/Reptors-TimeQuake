som = document.querySelectorAll(".som")

for (let i = 0; i < som.length; i ++){
    som[i].addEventListener("click", function(){
        som[0].classList.remove("animate__animated");

        som[0].classList.toggle("none");
        som[1].classList.toggle("none");
    })
}




