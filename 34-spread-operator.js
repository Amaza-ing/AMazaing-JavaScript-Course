const movies = ["El Señor de los Anillos", "Dune", "Star Wars"];

console.log(...movies);

const newMovies = [...movies];

console.log(newMovies);

movies[0] = "asdfa";

console.log(newMovies);
console.log(movies);

console.log(..."hola");

const obj1 = {
  a: 1,
  b: 2
}

const obj2 = {
  c: 3,
  d: 4
}

console.log({...obj1, ...obj2});