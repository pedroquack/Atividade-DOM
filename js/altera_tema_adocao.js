let slider_tema = document.querySelector(".slider_tema")

slider_tema.addEventListener("click", () => {
    let body = document.querySelector("body");
    let navbar = document.querySelector(".navbar");
    let formulario = document.querySelector(".formulario");
    let footer = document.querySelector("footer");
    let redes = document.querySelectorAll(".rede");
    if (slider_tema.checked) {
        body.classList.add("body_dark");
        navbar.classList.add("navbar-dark");
        formulario.classList.add("formulario_dark");
        footer.classList.add("footer-dark");
    } else {
        body.classList.remove("body_dark");
        navbar.classList.remove("navbar-dark");
        formulario.classList.remove("formulario_dark");
        footer.classList.remove("footer-dark");
    }
    redes.forEach((rede) => {
        if (slider_tema.checked) {
            rede.classList.add("rede-dark");
        } else {
            rede.classList.remove("rede-dark");
        }
    })
})