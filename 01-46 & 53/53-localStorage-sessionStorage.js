localStorage.setItem("username", "Carlos");

const username = localStorage.getItem("username");
console.log(username);

localStorage.removeItem("username");

localStorage.clear();

sessionStorage.setItem("theme", "dark");

const theme = sessionStorage.getItem("theme");
console.log(theme);

sessionStorage.removeItem("theme");

sessionStorage.clear();

const user = { name: "Ana", age: 30 };
localStorage.setItem("user", JSON.stringify(user))

const storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser);
