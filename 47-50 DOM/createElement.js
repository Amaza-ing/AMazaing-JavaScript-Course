const gallery = document.querySelector("#gallery");
console.log(gallery);

const h2 = document.createElement("h2");
h2.innerHTML = "Contenido creado dinámicamente";

gallery.appendChild(h2);

const cardsContainer = document.querySelector(".cards-container");

const h3 = document.createElement("h3");
h3.innerHTML = "Más contenido dinámico";

gallery.insertBefore(h3, cardsContainer);

const newCard = document.createElement("div");
newCard.classList.add("photo-card");

const cardName = document.createElement("h2");
cardName.innerHTML = "Gecko";

const img = document.createElement("img");
img.setAttribute(
  "src",
  "https://www.gecko-leopardo.com/wp-content/uploads/2024/06/gecko-leopardo-ojos.jpg"
);
img.classList.add("img");

newCard.appendChild(cardName);
newCard.appendChild(img);

cardsContainer.appendChild(newCard);
