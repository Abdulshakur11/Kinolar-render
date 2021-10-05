// =========== HTML ELEMENTS =============
var elFilmsList = $_(".films-list");

elFilmsList.innerHTML = "";

// ============= RENDER FUNCTION ==============
var renderFilms = function(kino) {

  var newElLi = createElement("li", "film__item");
  var newElTitleH5 = createElement("h5", "film__title", kino.title);
  var newElTrailerP = createElement("p", "film__trailer", kino.year);
  var newElGenresP = createElement("p", "film__genres", kino.genres);
  var newElActorsP = createElement("p", "film__actors", kino.cast);
  newElGenresP.textContent = kino.genres.join(", ") // Add a space
  newElActorsP.textContent = kino.cast.join(", ") // Add a space

  newElLi.appendChild(newElTitleH5);
  newElLi.appendChild(newElTrailerP);
  newElLi.appendChild(newElGenresP);
  newElLi.appendChild(newElActorsP);
  
  return newElLi;
}

kinolar.forEach(function (kino) {
  elFilmsList.appendChild(renderFilms(kino));
});

var pageLoader = $_(".loader");
window.addEventListener('load', function (evt) {
  pageLoader.remove();

})