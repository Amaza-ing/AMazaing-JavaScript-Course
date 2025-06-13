const fruits = ["manzana", "plátano"];

fruits.push("naranja");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.unshift("fresa");
console.log(fruits);

fruits.shift();
console.log(fruits);

console.log(fruits.indexOf("plátano"));
console.log(fruits.includes("kiwi"));

console.log(fruits.join(" "));
console.log(fruits.toString());

const numbers = [10, 20, 30, 40, 50];

const sliced = numbers.slice(1, 4);
console.log(sliced);

numbers.splice(2, 1, 99);
console.log(numbers);

const spliced = numbers.toSpliced(2, 1, 88);
console.log(spliced);
console.log(numbers);

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
  isForSale: true,
};

products.push(monitor);
console.log(products);
