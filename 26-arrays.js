const numbers = [10, 20, 30, 40, 50];
console.log(numbers);
console.log(numbers[0]);
console.log(numbers.length);
console.log(numbers[numbers.length - 1]);

const fruits = ["manzana", "plátano", "kiwi"];
console.log(fruits);
console.log(fruits[0]);

const books = [];
books[0] = "Harry Potter";
console.log(books);

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

console.log(products);
console.log(products[0]);
console.log(products[2].price);

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix[1][2]);
