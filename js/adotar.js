let formulario = document.querySelector("form")

const check_inputs = (nome, telefone, email, intencao) => {
    let control = true;
    if (nome.value.trim() == "") {
        nome.classList.add("erro");
        control = false;
    } else {
        nome.classList.remove("erro");
    }
    if (telefone.value.trim() == "") {
        telefone.classList.add("erro");
        control = false;
    } else {
        telefone.classList.remove("erro");
    }
    if (email.value.trim() == "") {
        email.classList.add("erro");
        control = false;
    } else {
        email.classList.remove("erro");
    }
    if(intencao.value.trim() == ""){
        intencao.classList.add("erro");
        control = false;
    }
    return control;
}

formulario.addEventListener("submit", (event) => {
    let nome = document.querySelector("#nome");
    let telefone = document.querySelector("#telefone");
    let email = document.querySelector("#email");
    let renda = document.querySelector("input[type='radio']:checked");
    let residencia = document.querySelector("#residencia");
    let opcao_residencia = residencia.options[residencia.selectedIndex];
    let intencao = document.querySelector("#intencao");

    if (!check_inputs(nome, telefone, email)) {
        event.preventDefault();
    } else {
        const adotante = {
            id: 1,
            nome: nome.value,
            telefone: telefone.value,
            email: email.value,
            renda: renda.value,
            residencia: opcao_residencia.value,
            intencao: intencao.value,
        };
    }
});