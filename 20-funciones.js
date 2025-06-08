// Funciones declaradas (Function declarations)

function sayHello() {
  console.log("Hello");
}

sayHello();


// Funciones expresadas (Function expressions)

const sayGoodbye = function() {
  console.log("Goodbye");  
}

sayGoodbye();


// Funciones con argumentos

function saySomething(msg) {
  console.log(msg);  
}

saySomething("Esto es un mensaje por parámetro");
saySomething("Esto es otro mensaje");


function sum(num1, num2) {
  console.log(num1 + num2);  
}

sum(10, 5);


// Valores por defecto

function greet(name = "Invitado") {
  console.log(`Hola, ${name}`);  
}

greet("Adrián");
greet();


// Return

function multiply(num1, num2) {
  return num1 * num2;
}

const multiplyResult = multiply(3, 4);
console.log(multiplyResult);
