const numArray = [10, 20, 30];
const movieArray = [
  {
    title: "El Señor de los Anillos: La Comunidad del Anillo",
    IMDBRating: 8.9,
  },
  {
    title: "Manos: The Hands of Fate",
    IMDBRating: 1.6,
  },
];

const foundNumber = numArray.find((num) => num > 15);
console.log(foundNumber); // 20

const foundMovie = movieArray.find(
  (movie) => movie.title === "Manos: The Hands of Fate"
);
console.log(foundMovie);


const numIndex = numArray.findIndex(num => num > 15);
console.log(numIndex); // 1

const movieIndex = movieArray.findIndex(
  (movie) => movie.title === "Manos: The Hands of Fate"
);
console.log(movieIndex); // 1
