const numbers = [10, 20, 30, 40, 50];

numbers.forEach((number) => {
  console.log(number);
});

numbers.forEach((number) => console.log(number));


const fruits = ["manzana", "plátano", "kiwi"];

fruits.forEach((fruit) => console.log(fruit.toUpperCase()));


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

movieArray.forEach(movie => console.log(movie.title));

movieArray.forEach(movie => {
  if (movie.IMDBRating > 6) {
    console.log(movie.title);    
  }
})
