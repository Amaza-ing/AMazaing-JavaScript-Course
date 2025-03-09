const products = ["ordenador", "teclado", "ratón"];

// for (const product of products) {
//   console.log(product);  
// }

const book = {
  title: "Harry Potter",
  pages: 200,
  author: "J.K. Rowling"
}

// for (const key in book) {
//   console.log(`${key}: ${book[key]}`);  
// }

products.forEach((product) => {
  console.log(product);  
})