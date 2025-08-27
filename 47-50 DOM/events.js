const title = document.querySelector(".title");

title.addEventListener("click", () => {
  console.log("Se ha hecho click en el título");
});

title.addEventListener("mouseenter", () => {
  title.classList.add("big");
});

title.addEventListener("mouseleave", () => {
  title.classList.remove("big");
});

const cards = document.querySelectorAll(".photo-card");

cards.forEach((card) => card.addEventListener("click", () => {
  card.classList.add("big");
}));
