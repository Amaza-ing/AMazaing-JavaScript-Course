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

const newNumArray = numArray.map((number) => {
  return number * 2;
})
console.log(newNumArray);

const newStrArray = strArray.map((word) => {
  return word.length
})
console.log(newStrArray);

const newMovieArray = movieArray.map((movie) => {
  return {
    title: movie.title,
    isGood: movie.IMDBRating >= 6
  }
})
console.table(newMovieArray)


console.log("numArray: ", numArray);
console.log("strArray: ", strArray);
console.table(movieArray);
