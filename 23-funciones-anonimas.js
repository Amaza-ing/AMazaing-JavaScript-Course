function f(cb) {
  // ...
  cb();
}

f((param1, param2) => {
  param1 + param2
})

const arr = [1, 2, 3];

arr.forEach((el) => {
  console.log(el);
})