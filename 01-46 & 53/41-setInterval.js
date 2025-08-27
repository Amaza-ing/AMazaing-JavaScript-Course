let number = 0;

const myFunc = () => {
  number++;
  console.log(number);
  if (number > 3) clearInterval(intervalId);
};

const intervalId = setInterval(myFunc, 1000);

console.log("id: ", intervalId);
