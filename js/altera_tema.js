
let slider_tema = document.querySelector(".slider_tema")

slider_tema.addEventListener("click", () => {
    let body = document.querySelector("body");
    let navbar = document.querySelector(".navbar");
    let main = document.querySelector(".banner");
    let footer = document.querySelector("footer");
    let redes = document.querySelectorAll(".rede");
    let formulario = document.querySelector(".formulario");
    if (slider_tema.checked) {
        formulario.classList.add("formulario_dark");
        footer.classList.add("footer-dark");
        body.classList.add("body_dark");
        navbar.classList.add("navbar-dark");
        main.classList.add("banner-dark");

    } else {
        formulario.classList.remove("formulario_dark");
        footer.classList.remove("footer-dark");
        body.classList.remove("body_dark");
        navbar.classList.remove("navbar-dark");
        main.classList.remove("banner-dark");
    }
    redes.forEach((rede) => {
        if (slider_tema.checked) {
            rede.classList.add("rede-dark");
        } else {
            rede.classList.remove("rede-dark");
        }
    })
})