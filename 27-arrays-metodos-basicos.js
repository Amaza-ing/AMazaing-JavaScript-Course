const fruits = ["manzana", "plátano"];

fruits.push("naranja");
console.log(fruits); // ["manzana", "plátano", "naranja"]

fruits.pop();
console.log(fruits); // ["manzana", "plátano"]

fruits.unshift("fresa");
console.log(fruits); // ["fresa", "manzana", "plátano"]

fruits.shift();
console.log(fruits); // ["manzana", "plátano"]

console.log(fruits.indexOf("plátano")); // Salida: 1
console.log(fruits.includes("manzana")); // Salida: true

console.log(fruits.join(" ")); // Salida: manzana plátano
console.log(fruits.toString()); // Salida: manzana,plátano


const numbers = [10, 20, 30, 40, 50];

const sliced = numbers.slice(1, 4);
console.log(sliced); // [20, 30, 40]

numbers.splice(2, 1, 99);
console.log(numbers); // [10, 20, 99, 40, 50]


const products = [
  {
    name: "Ordenador",
    price: 1000,
    isForSale: true,
  },
  {
    name: "Teclado",
    price: 50,
    isForSale: true,
  },
  {
    name: "Ratón",
    price: 20,
    isForSale: false,
  },
];

const monitor = {
  name: "Monitor",
  price: 200,
  isForSale: true
}

products.push(monitor);
console.log(products);
