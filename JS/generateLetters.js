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
    console.log(elementVal);
    if (elementVal) {
      generateUrl(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${elementVal}`
      );
    }
  });
}
