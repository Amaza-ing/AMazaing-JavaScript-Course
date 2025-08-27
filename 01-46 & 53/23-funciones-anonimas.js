function f(cb) {
  // ...
  const p1 = "param 1";
  const p2 = "param 2";

  cb(p1, p2);
}

function g(param1, param2) {
  console.log(param1, param2);  
}

f(g);

f((param1, param2) => {
  console.log(param1, param2);  
})


// Ejemplo para repetir funciones

function repeat(times, cb) {
  for (let i = 0; i < times; i++) {
    cb(i);
  }
}

repeat(3, i => console.log(`Iteración ${i}`));


// Ejemplo con arrays

const arr = [10, 20, 30];

arr.forEach((el) => {
  console.log(el);
})