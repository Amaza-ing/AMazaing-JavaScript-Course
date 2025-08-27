const title = document.querySelector(".title");
console.log(title);

title.innerHTML = "Nuevo Título";

// title.style.backgroundColor = "yellow";

console.log(title.getAttribute("class"));
title.setAttribute("id", "patata");

title.classList.add("big");
title.classList.remove("big");

const cards = document.querySelectorAll(".photo-card");
console.log(cards);

cards.forEach((card) => card.classList.add("purple"))
