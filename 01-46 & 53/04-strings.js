const message = "     Hola hola hola patata!    ";

let doubleQuoteStr = "Esto \"es\" \n un 'string'" + " " + message;
console.log(doubleQuoteStr);

let singleQuoteStr = 'Esto \'es\' \n otro "string"';
console.log(singleQuoteStr);

let backtickStr = `Esto es un
 string con backticks ${message}`;
console.log(backtickStr);


console.log("Message length", message.length);
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.includes("la"));
console.log(message.replaceAll("hola", "adiós"));
console.log(message.trim());






