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

function clickOnLetter(event) {
  getMealsFromServer(event.target.innerText);
}

function getMealsFromServer(letter) {
  const url = generateUrl(letter);
  fetch(url)
    .then(r => r.json())
    .then(json => {
      generateMeals(json, letter);
    });
  console.log(url);
}

function generateUrl(letter) {
  return `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`;
}

const renderContent = document.getElementById("renderContent");

function generateMeals(json) {
  renderContent.innerHTML = null;

  const mealImg = document.createElement("img");
  mealImg.setAttribute("src", json.meals[0].strMealThumb);
  mealImg.classList.add("meal-img");
  renderContent.appendChild(mealImg);

  const box = document.createElement("div");
  box.classList.add("desc-box");
  renderContent.appendChild(box);

  const mealTitle = document.createElement("div");
  mealTitle.innerHTML = json.meals[0].strMeal;
  mealTitle.classList.add("meal-title");
  box.appendChild(mealTitle);

  const mealText = document.createElement("p");
  mealText.innerHTML = json.meals[0].strInstructions;
  mealText.classList.add("meal-text");
  box.appendChild(mealText);
}

generateAlphabetLetters();
clickOnLetter();
