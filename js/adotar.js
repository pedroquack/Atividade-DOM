let formulario = document.querySelector("form")
formulario.addEventListener("submit",(event) => {
    event.preventDefault();
    let nome = document.querySelector("#nome").value;
    let telefone = document.querySelector("#telefone").value;
    let email = document.querySelector("#email").value;
    let renda = document.querySelector("input[type='radio']:checked").value;
    let residencia = document.querySelector("#residencia");
    let opcao_residencia = residencia.options[residencia.selectedIndex].value;
    console.log(opcao_residencia);
});