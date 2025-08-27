const numbers = [1, 2, 3, 4];

const copy1 = numbers.slice();
copy1.push(10);

console.log(numbers);
console.log(copy1);

const copy2 = [...numbers];
copy2.push(20);

console.log(numbers);
console.log(copy2);

const copy3 = numbers.map((number) => number);
copy3.push(30);

console.log(numbers);
console.log(copy3);



const objArray = [{num: 1}, {num: 2}];

// const shallowCopy = [...objArray];
// shallowCopy[0].num = 10;
// console.log(objArray, shallowCopy);

const deepCopy = JSON.parse(JSON.stringify(objArray));
deepCopy[0].num = 10;
console.log(objArray, deepCopy);

const deepClone = structuredClone(objArray);
deepClone[0].num = 10;
console.log(objArray, deepClone);
