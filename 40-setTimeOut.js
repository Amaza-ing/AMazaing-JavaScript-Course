let number = 0;

const timeoutId = setTimeout(() => {
  number = 100
  console.log(number);
}, 1000)

console.log("después del setTimeOut", number);

console.log("TImeout id", timeoutId);

clearTimeout(timeoutId)