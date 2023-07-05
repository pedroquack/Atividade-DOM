const listaAnimais = [
  {
    id: 1,
    nome: "Bananilson Farofa",
    sexo: "Macho",
    descricao: "Foi resgatado após ser encontrado entupido de farofa em uma casa no Rio Grande do Norte",
    imgURL: "./img/bananilson-farofa.png",
  },
  {
    id: 2,
    nome: "John Cena",
    sexo: "Macho",
    descricao: "Foi resgatado de um fundo de padaria onde era realizado rinhas de animais domésticos",
    imgURL: "./img/John-Cena.png",
  },
  {
    id: 3,
    nome: "Princesa",
    sexo: "Femea",
    descricao: "Nascida no abrigo, filha do Bananilson Farofa e da Serja",
    imgURL: "./img/princesa.png",
  },
  {
    id: 4,
    nome: "Elon Musk",
    sexo: "Macho",
    descricao: "Foi resgatado de uma agencia aero-espacial, onde seria usada como cão-astronauta, oque configurou maus-tratos e então foi recolhido para o abrigo, é muito inteligente",
    imgURL: "./img/elon-musk.png",
  },
  {
    id: 5,
    nome: "Serja",
    sexo: "Femea",
    descricao: "Foi tirada de seus antigos tutores por causa de maus-tratos, ela estava obesa e com danos na coluna, agora está saudável e pronta para um lar definitivo!",
    imgURL: "./img/basset.png",
  },
  {
    id: 6,
    nome: "Quack",
    sexo: "Macho",
    descricao: "Foi encontrado dentro de um bueiro no Jardim El Dorado, e trazido para o abrigo para receber os cuidados, é um pato manso e bem brincalhão",
    imgURL: "./img/quack.png",
  },
  {
    id: 7,
    nome: "Salsichão",
    sexo: "Macho",
    descricao: "Apareceu na frente do abrigo vestindo uma fantasia de cachorro quente, seus donos nunca vieram o buscar.",
    imgURL: "./img/cachorro-quente.png",
  },
  {
    id: 8,
    nome: "Scar",
    sexo: "Macho",
    descricao: "Foi resgatado após ser atacado brutalmente por um grupo de galinhas",
    imgURL: "./img/scar.png",
  },
  {
    id: 9,
    nome: "Caramelo",
    sexo: "Macho",
    descricao: "Apareceu na frente da casa de um dos administradores do abrigo pedindo comida",
    imgURL: "./img/caramelo.png",
  }

]

let colunas_card = document.querySelector(".colunas_card");

const criacaoPosts = () => {
  listaAnimais.forEach((post) => {
    let card =
      `
        <div class="card col-lg-3 col-12 d-flex flex-column">
          <img src=${post.imgURL} class="card-img-top" alt=""/>
          <div class="card-body d-flex flex-column justify-content-center">
            <h5 class="card-title text-center">${post.nome}</h5>
            <h6 class="card-sexo text-center">${post.sexo}</h6>
            <p class="card-text">${post.descricao}</p>
            <a href="" class="botao btn btn-primary" id_animal="${post.id}">Entre em contato</a>
          </div>
        </div>
    `;
    colunas_card.innerHTML += card;
  });
};


window.onload = () => {
  criacaoPosts();
  slider_tema.addEventListener("click", () => {
    let cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      if (slider_tema.checked) {
        card.classList.add("card-dark");
      } else {
        card.classList.remove("card-dark")
      }
    });
  });
  
  let card_body = document.querySelectorAll(".card-body");
  console.log(card_body)
  card_body.forEach((card) => {
    card.lastElementChild.addEventListener("click", (event) =>{
      event.preventDefault();
      sessionStorage.setItem(
        "id_animal",
        card.lastElementChild.getAttribute("id_animal")
      );
      window.location.href = "../adotar.html"
    })
  })
};

