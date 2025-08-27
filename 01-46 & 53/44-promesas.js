console.log("Promesas");

const condition = true;

function myFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      
      if (condition) resolve("Se ha resuelto");
      else reject("Error");
  
    }, 1000)
  })
}

function myFunction2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      
      if (condition) resolve("Se ha resuelto 2");
      else reject("Error");
  
    }, 1000)
  })
}

myFunction()
  .then((response) => {
    console.log(response);
    return myFunction2();
  })
  .then((res) => console.log(res))
  .catch((error) => console.log(error))