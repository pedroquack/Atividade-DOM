const listaAnimais = [
  {
    nome: "Bananilson Farofa",
    sexo: "Macho",
    descricao: "Foi resgatado após ser encontrado entupido de farofa em uma casa no Rio Grande do Norte",
    imgURL: "./img/bananilson-farofa.png",
  },
  {
    nome: "John Cena",
    sexo: "Macho",
    descricao: "Foi resgatado de um fundo de padaria onde era realizado rinhas de animais domésticos",
    imgURL: "./img/John-Cena.png",
  },
  {
    nome: "Princesa",
    sexo: "Femea",
    descricao: "Nascida no abrigo, filha do Bananilson Farofa e da Serja",
    imgURL: "./img/princesa.png",
  },
  {
    nome: "Elon Musk",
    sexo: "Macho",
    descricao: "Foi resgatado de uma agencia aero-espacial, onde seria usada como cão-astronauta, oque configurou maus-tratos e então foi recolhido para o abrigo, é muito inteligente",
    imgURL: "./img/elon-musk.png",
  },
  {
    nome: "Serja",
    sexo: "Femea",
    descricao: "Foi tirada de seus antigos tutores por causa de maus-tratos, ela estava obesa e com danos na coluna, agora está saudável e pronta para um lar definitivo!",
    imgURL: "./img/basset.png",
  },
  {
    nome: "Quack",
    sexo: "Macho",
    descricao: "Foi encontrado dentro de um bueiro no Jardim El Dorado, e trazido para o abrigo para receber os cuidados, é um pato manso e bem brincalhão",
    imgURL: "./img/quack.png",
  },
  {
    nome: "Salsichão",
    sexo: "Macho",
    descricao: "Apareceu na frente do abrigo vestindo uma fantasia de cachorro quente, seus donos nunca vieram o buscar.",
    imgURL: "./img/cachorro-quente.png",
  },
  {
    nome: "Scar",
    sexo: "Macho",
    descricao: "Foi resgatado após ser atacado brutalmente por um grupo de galinhas",
    imgURL: "./img/scar.png",
  },
  {
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
            <a href="#" class="botao btn btn-primary">Entre em contato</a>
          </div>
        </div>
    `;
    colunas_card.innerHTML += card;
  });
};


let slider_tema = document.querySelector(".slider_tema")

slider_tema.addEventListener("click", () => {
  let body = document.querySelector("body");
  let navbar = document.querySelector(".navbar");
  let main = document.querySelector(".banner");
  let footer = document.querySelector("footer");
  let redes = document.querySelectorAll(".rede")
  if (slider_tema.checked) {
    body.classList.add("body_dark");
    navbar.classList.add("navbar-dark");
    main.classList.add("banner-dark");
    footer.classList.add("footer-dark");
  } else {
    body.classList.remove("body_dark");
    navbar.classList.remove("navbar-dark");
    main.classList.remove("banner-dark");
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
};

