const original = {
  name: "Carlos",
  age: 40,
  address: {
    street: "Gran Vía",
    number: 10
  }
};

const copy = { ...original };
copy.age = 50;
copy.address.street = "Paseo del Río";

console.log(original);
console.log(copy);


const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.age = 33;
deepCopy.address.street = "Plaza Trinidad";

console.log(original);
console.log(deepCopy);

const deepClone = structuredClone(original);
deepClone.age = 44;
deepClone.address.number = 99;

console.log(original);
console.log(deepClone);


