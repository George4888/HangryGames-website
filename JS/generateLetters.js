console.log("start");

function generateAlphabetLetters() {
  const footer = document.getElementById("footer");
  const lettersContainer = document.createElement("div");
  lettersContainer.id = "letters";

  for (let i = 65; i < 91; i++) {
    const letter = String.fromCharCode(i);

    const letterDOM = document.createElement("span");
    letterDOM.innerText = letter;

    footer.appendChild(lettersContainer);
    lettersContainer.appendChild(letterDOM);
    letterDOM.addEventListener("click", clickOnLetter);
  }
}

generateAlphabetLetters();

function hideImg() {
  document.getElementById("renderContent").style.display = "none";
}

function clickOnLetter(event) {
  hideImg();
  getMealsFromServer(event.target.innerText);
}

function getMealsFromServer(letter) {
  const url = generateUrl(letter);
  fetch(url)
    .then(r => r.json())
    .then(json => {
      generateMeal(json, letter);
    });
  console.log(url);
}

function generateUrl(letter) {
  return `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`;
}

const renderContent = document.getElementById("renderContent");

function generateMeals(mealName, letter, renderContent) {
  renderContent.innerText = null;

  const mealTitle = document.createElement("div");
  mealTitle.innerText = mealName.strMeal;
  renderContent.appendChild(mealName);

  const mealImg = document.createElement("img");
  mealImg.setAttribute("src", mealData.strMealThumb);
  mealImg.classList.add("meal-img");
  renderContent.appendChild(mealImg);

  const mealText = document.createElement("p");
  mealText.innerText = mealData.strInstructions;
  container.appendChild(mealText);
}
