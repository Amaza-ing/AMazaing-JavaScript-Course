// Constructor Object()

const movie = new Object();
movie.title = "El Señor de los Anillos";
movie.duration = 200;
movie.year = 2001;

console.log(movie);


// Funciones constructoras

function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const user = new Person("Carlos", "López", 28);
console.log(user);


// Métodos de los objetos

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
console.log(user.hasOwnProperty("age"));
