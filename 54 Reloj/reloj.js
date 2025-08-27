const secondHand = document.querySelector(".seconds");
const minuteHand = document.querySelector(".minutes");
const hourHand = document.querySelector(".hours");

const moveHands = () => {
  const date = new Date();
  const seconds = date.getSeconds() / 60;
  console.log(seconds + date.getMinutes() / 60);
  const minutes = (seconds + date.getMinutes()) / 60;
  const hours = (minutes + date.getHours()) / 12;

  secondHand.style.setProperty("--rotate", seconds * 360);
  minuteHand.style.setProperty("--rotate", minutes * 360);
  hourHand.style.setProperty("--rotate", hours * 360);
};

setInterval(moveHands, 1000);
