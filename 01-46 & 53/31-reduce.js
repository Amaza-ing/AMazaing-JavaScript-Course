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

const sumResult = numArray.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(sumResult);

const strResult = strArray.reduce((acc, curr) => {
  return acc + " " + curr;
}, "");
console.log(strResult);

const titleArray = movieArray.reduce((acc, curr) => {
  acc.push(curr.title);
  return acc;
}, []);
console.log(titleArray );
