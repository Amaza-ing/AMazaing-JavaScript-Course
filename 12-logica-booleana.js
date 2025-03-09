const num1 = 10;
const num2 = 20;
const otherCondition = false;

if (num1 < num2 && otherCondition) {
  // console.log("La condición se cumple");  
}

// C1 && C2
// T  &&  T  = T
// T  &&  F  = F
// F  &&  T  = F
// F  &&  F  = F

if (num1 < num2 || otherCondition) {
  // console.log("La condición se cumple");  
}

// C1 || C2
// T  ||  T  = T
// T  ||  F  = T
// F  ||  T  = T
// F  ||  F  = F

if (!otherCondition) {
  console.log("La condición se cumple");  
}