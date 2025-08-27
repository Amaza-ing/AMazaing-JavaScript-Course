function a() {
  console.log("Función a");
}

function b() {
  console.log("FUnción b");
}

console.log(a);

function f(cb) {
  console.log("Dentro de F");
  // console.log(cb);
  cb();
}

f(a);
f(b);

