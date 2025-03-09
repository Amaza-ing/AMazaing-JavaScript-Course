// const result = true && true;
// const result = true && false;
// const result = 123 && 0 && 789;
// const result = "aaa" && "asdf";
// false && console.log("Hola");
// console.log(result);

// const result = true || true;
// const result = true || false;
// const result = 0 || false || 0;
const result = "" || "asdf";
console.log(result);

let userName = "Adrián"

const hello = userName || "User";
console.log("Hello ", hello);
