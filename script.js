const search_input = document.getElementById("search_input");
const search_btn = document.getElementById("search_btn");

search_btn.addEventListener("click", () => {
  if (search_input.classList.contains("invisible")) {
    search_input.classList.remove("invisible");
    search_input.classList.add("visible");
  } else {
    search_input.classList.add("invisible");
    search_input.classList.remove("visible");
  }
});


const reponse = await fetch("movies.json");
const movies = await reponse.json();
const recomContent = document.getElementById("recommended_content");
const popContent = document.getElementById('popular_content');
const listContent = document.getElementById('listContent');
const listElement = document.querySelectorAll('#listContent > div')

let moviesList = document.createElement("div");
moviesList.className = "grid grid-cols-6 gap-4";

function showMovies(moviesId){
  for (let i = 0; i < movies.length; i++) {
    let movie = movies[i];
    if (movie.category === moviesId) {
      const movieCard = document.createElement("div");
      movieCard.className = "rounded lexend bg-slate-500 h-fit w-full p-2 hover:scale-105 transition ease-out duration-300";
      movieCard.innerHTML = `
      <div class="h-60">
      <img src="${movie.picture}" alt="" class=" rounded-lg h-60 w-full">
      </div>
      <div class="text-white flex justify-between mt-2 items-center">
        <div>
          <h2 class="font-medium text-sm">${movie.title}</h2>
          <h4 class="font-light text-sm">${movie.year} &nbsp; ${movie.duration}</h4>
        </div>
        <button type="button" class="p-2 mt-2 text-center bg-slate-800 text-red-600 rounded-full">
           <svg class="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
              class="w-4 h-4">
              <path
              d="M3 3.732a1.5 1.5 0 0 1 2.305-1.265l6.706 4.267a1.5 1.5 0 0 1 0 2.531l-6.706 4.268A1.5 1.5 0 0 1 3 12.267V3.732Z" />
              </svg>
              </button>
      </div>
      `;
      moviesList.appendChild(movieCard);

    }
  }
}

function showMoviesP(moviesId){
  for (let i = 0; i < movies.length; i++) {
    let movie = movies[i];
    if (movie.category === moviesId) {
      const movieCard = document.createElement("div");
      movieCard.className = "rounded lexend bg-slate-500 h-fit  w-full p-2 hover:scale-105 transition ease-out duration-300";
      movieCard.innerHTML = `
      <div class="h-60">
      <img src="${movie.picture}" alt="" class=" rounded-lg h-60 w-full">
      </div>
      <div class="text-white flex justify-between mt-2 items-center">
        <div>
          <h2 class="font-medium text-sm">${movie.title}</h2>
          <h4 class="font-light text-sm">${movie.year} &nbsp; ${movie.duration}</h4>
        </div>
        <button type="button" class="p-2 mt-2 text-center bg-slate-800 text-red-600 rounded-full">
           <svg class="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
              class="w-4 h-4">
              <path
              d="M3 3.732a1.5 1.5 0 0 1 2.305-1.265l6.706 4.267a1.5 1.5 0 0 1 0 2.531l-6.706 4.268A1.5 1.5 0 0 1 3 12.267V3.732Z" />
              </svg>
              </button>
      </div>
      `;
      moviesListP.appendChild(movieCard);

    }
  }
}
showMovies('Recommended');
recomContent.appendChild(moviesList);


let moviesListP = document.createElement("div");
moviesListP.className = "grid grid-cols-6 gap-4";
showMoviesP('Popular');
popContent.appendChild(moviesListP);

/*function contMovies(content, moviesId){
  showMovies(moviesId);
content.appendChild(moviesList);
 }*/

// contMovies(recomContent, 'Recommended');
// contMovies(popContent, 'Popular');
