//To navigate to display recipe page
// const addrecipebtn = document.querySelector("#addrecipebtn");
// addrecipebtn.addEventListener("click", function () {
//   window.open("./displayrecipe.html");
//   console.log("displaypage");
// });

const addRecipesForm = document.querySelector("#form-container");
const updateBtn = document.getElementById("upl-button");
const reader = new FileReader(updateBtn);
var imgurl = "";
var path = "";
updateBtn.addEventListener("change", function (event) {
  console.log("Working------------->");
  imgurl = event.target.files[0].name;
  document.getElementById("recipe-image").value = imgurl;
  //path = document.getElementById("upl-button").value;
  path = imgurl;
  console.log("path", path);
  console.log(imgurl);
  if (imgurl) {
    console.log(imgurl);
  } else {
    console.log("Working but file not uploaded");
  }
});

addRecipesForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(addRecipesForm);
  const recipiesList = {
    id: new Date().getTime(),
    recipieName: formData.get("recipe-name"),
    foodType: formData.get("food-type-radio"),
    ingredients: formData.get("ingredients"),
    stepstoPrepare: formData.get("preparation-steps"),
    image: {
      url: path,
      altInfo: formData.get("recipe-name") + " " + "Image",
    },
  };
  console.log("recipiesList" + " " + JSON.stringify(recipiesList));
  sessionStorage.setItem("recipiesList", JSON.stringify(recipiesList));

  console.log(recipiesList);
  if (recipiesList) {
    window.location.href = "./displayrecipe.html";
  } else {
    console.log("Working but file not uploaded");
  }
});
