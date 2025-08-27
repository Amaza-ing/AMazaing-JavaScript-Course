const product = {
  name: "Computer",
  price: 1000,
  isForSale: true,
  data: {
    seriesNumber: 1234,
  },
};

console.log(product);
console.log(product.name);
console.log(product.data.seriesNumber);

console.log(product["price"]);

const key = "isForSale";
console.log(product[key]);

product.color = "Blue";
console.log(product);

const calculator = {
  sum: function (a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
};

console.log(calculator.sum(10, 5));
console.log(calculator.subtract(5, 3));
