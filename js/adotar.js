let formulario = document.querySelector("form")
const obj_obrigatorio =
`
    <div class = "campo_obrigatorio d-flex align-items-center p-1">
        <img src="../img/icones/icone-erro.png">
        <small> * Campo obrigatório</small>
    </div>
`;
const check_inputs = (nome, telefone, email,renda,residencia,opcao_residencia,intencao) => {
    let control = true;
    
    if (nome.value.trim() == "") {
        nome.classList.add("erro");
        control = false;
        nome.parentElement.innerHTML += obj_obrigatorio;
    } else {
        nome.classList.remove("erro");
    }
    if (telefone.value.trim() == "") {
        telefone.classList.add("erro");
        control = false;
        telefone.parentElement.innerHTML += obj_obrigatorio;
    } else {
        telefone.classList.remove("erro");
    }
    if (email.value.trim() == "") {
        email.classList.add("erro");
        control = false;
        email.parentElement.innerHTML += obj_obrigatorio;
    } else {
        email.classList.remove("erro");
    }
    if(renda == null){
        let area_renda = document.querySelector(".form_item_radio").parentElement
        area_renda.classList.add("erro")
        control = false
        area_renda.innerHTML += obj_obrigatorio;
    }
    if(opcao_residencia.value == ""){
        residencia.classList.add("erro")
        control = false;
        residencia.parentElement.innerHTML += obj_obrigatorio;
    }else{
        residencia.classList.remove("erro")
    }
    if(intencao.value.trim() == ""){
        intencao.classList.add("erro")
        control = false;
        intencao.parentElement.innerHTML += obj_obrigatorio;
    }else{
        intencao.classList.remove("erro")
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
    if (!check_inputs(nome, telefone, email,renda,residencia,opcao_residencia,intencao)) {
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
            animal: sessionStorage.getItem("id_animal")
        };

        const objeto_JSON = JSON.stringify(adotante);
        console.log(objeto_JSON)
        
    }
});

