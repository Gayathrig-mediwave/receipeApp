// /const addrecipe = document.getElementById("addrecipe");
//To navigate to add recipe page
// addrecipe.addEventListener("onClick", function (event) {
//   window.location.href = "./addrecipe.html";
// });
recipiesList = JSON.parse(sessionStorage.getItem("recipiesList"));
window.addEventListener("load", (event) => {
  console.log("HIIII-----------------");
  console.log("recipiesList-------------------");
  console.log(recipiesList);
  if (recipiesList) {
    displayRecipesCard(recipiesList);
  }
});

function displayRecipesCard(recipiesList) {
  console.log("hello-------------------------------------");
  const div = document.createElement("div");
  div.classList.add("movie");
  console.log("hello div -------------------------------------");
  const img = document.createElement("img");
  img.src = "url(./images/${recipiesList.image.url})";
  div.appendChild(img);
  console.log("hello-------- img-----------------------------");
  document.getElementById("imagecards").append(div);
  console.log("hello--------all-----------------------------");
}
// displayRecipesCard(recipiesList);

/* <div class="recipe-card-wrap">
  <div class="recipe-card">
    <div class="cover-img">
      <img src="./images/farhad-ibrahimzade-KpOl9jV2aJM-unsplash.png" alt="" />
    </div>
    <div class="content">
      <div class="name-content">
        <p>Chicken pasta</p>
        <img src="./images/Group 3.png" alt="" width="20px" height="20px" />
      </div>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
    </div> m
  </div>
</div>;
function addToMovieList(movie) {
  console.log(movie);

  const div = document.createElement("div");
  div.classList.add("movie");

  const h2 = document.createElement("h2");
  h2.textContent = movie.movieName;
  div.appendChild(h2);

  const h3 = document.createElement("h3");
  h3.textContent = movie.movieYear;
  div.appendChild(h3);

  const p = document.createElement("p");
  p.textContent = movie.movieGenre;
  div.appendChild(p);

  const h4 = document.createElement("h4");
  h4.textContent = movie.movieId;
  div.appendChild(h4);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  div.appendChild(deleteBtn);
  deleteBtn.setAttribute("id", movie.movieId);
  deleteBtn.addEventListener("click", function (event) {
    div.remove();

    removeMovie(movie.movieId);
  });

  document.getElementById("movie-list").append(div);
} */
