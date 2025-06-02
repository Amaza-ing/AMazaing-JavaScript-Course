const numArray = [10, 20, 30];
const strArray = ["Hola", "a", "todos"];
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

console.log("numArray: ", numArray);
console.log("strArray: ", strArray);
console.table(movieArray);

const newNumArray = numArray.filter((number) => {
  return number < 25;
})
console.log(newNumArray);

const newStrArray = strArray.filter((word) => {
  return word.length > 3;
})
console.log(newStrArray);

const newMovieArray = movieArray.filter((movie) => {
  return movie.IMDBRating >= 5;
})
console.table(newMovieArray);

console.log("numArray: ", numArray);
console.log("strArray: ", strArray);
console.table(movieArray);
