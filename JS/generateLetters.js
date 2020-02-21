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
  }
}

generateAlphabetLetters();

function generateUrl(url) {
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      renderMeals(json.meals);
    });
}

const letters = document
  .getElementById("footer")
  .getElementsByClassName("span");

for (const element of letters) {
  element.addEventListener("click", function() {
    const elementVal = element.innerText;
    if (elementVal) {
      generateUrl(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${elementVal}`
      );
    }
  });
}

const renderContent = document.getElementById("renderContent");

function displayMeal() {
  console.log("a");
  renderContent.innerHTML = null;
  for (const meal of meals) {
    const mealContainer = document.createElement("div");
    mealContainer.classList.add("single-meal");
    renderContent.appendChild(mealContainer);

    const mealTitle = document.createElement("h3");
    mealTitle.innerText = meal.strMeal;
    mealContainer.appendChild(mealTitle);

    const mealImg = document.createElement("img");
    mealImg.setAttribute("src", meal.strMealThumb);
    mealContainer.appendChild(mealImg);

    const mealContent = document.createElement("p");
    mealContent.innerText = meal.strInstructions;
    mealContainer.appendChild(mealContent);
  }
}
