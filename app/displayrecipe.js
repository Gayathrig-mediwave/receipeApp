recipiesList = JSON.parse(sessionStorage.getItem("recipiesList"));
let s;

function displayRecipes(recipiesList) {
  document.getElementById("dispname-coverimg").innerHTML =
    recipiesList.recipieName;
  document.getElementById(
    "addRecipe-img"
  ).style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(./images/${recipiesList.image.url})`;
  document.getElementById("dispname").innerHTML = recipiesList.recipieName;
  document.getElementById(
    "dispRecipe-img"
  ).style.backgroundImage = `url(./images/${recipiesList.image.url})`;
  if (recipiesList.foodType == "Non-Vegetarian") {
    document.getElementById("foodTypeIcon").src = "./images/Group 3.png";
  } else {
    document.getElementById("foodTypeIcon").src = "./images/Group 3.svg";
  }
  document.getElementById("disp-ing").innerText = recipiesList.ingredients;
  document.getElementById("disp-steps").innerText = recipiesList.stepstoPrepare;

  //   const element = document.getElementById("id01");
  //   element.innerHTML = "New Heading";

  console.log(recipiesList);
}

displayRecipes(recipiesList);
