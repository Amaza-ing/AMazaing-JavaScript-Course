const dog = {
  name: "Firulais",
  legs: 4,
  isAmazing: true,
  owner: {
    name: "Paco",
    age: 30,
  },
};

const movies = ["El Señor de los Anillos", "Dune", "Star Wars"];

const {
  name,
  legs: legsNum,
  owner: {
    name: ownerName,
    age
  },
} = dog;

console.log(name, legsNum, age, ownerName);

const [movie1, , movie3] = movies;

console.log(movie3);
