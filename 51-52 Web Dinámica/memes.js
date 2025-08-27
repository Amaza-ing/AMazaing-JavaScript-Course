const memeList = document.querySelector(".meme-list");

function addMemeItem(meme) {
  const li = document.createElement("li");
  li.setAttribute("id", meme.id);

  const h2 = document.createElement("h2");
  h2.innerHTML = meme.name;

  const img = document.createElement("img");
  img.setAttribute("src", meme.url);
  img.setAttribute("height", 500);

  li.appendChild(h2);
  li.appendChild(img);

  memeList.appendChild(li);
}

async function getMemes(start = 0, quantity = 1) {
  try {
    const response = await fetch("https://api.imgflip.com/get_memes");
    const responseData = await response.json();
    // console.log(responseData);
    const memes = responseData.data.memes;
    // console.log(memes);
    const selectedMemes = memes.slice(start, start + quantity);

    selectedMemes.forEach((meme) => addMemeItem(meme));

  } catch (error) {
    console.log(error);
  }
}

const memesForm = document.querySelector("#memes-form");
const startInput = document.querySelector("#start");
const quantityInput = document.querySelector("#quantity");

memesForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const start = Number(startInput.value);
  const quantity = Number(quantityInput.value);

  memeList.innerHTML = "";
  getMemes(start, quantity);
  startInput.value = 0;
  quantityInput.value = 0;
})

const randomBtn = document.querySelector("#random-btn");

randomBtn.addEventListener("click", () => {
  const maxNum = 100;
  const randomNumber = Math.floor(Math.random() * maxNum);

  getMemes(randomNumber);
})
