const container = document.querySelector('.banner-row');


// let promise = fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films',
//   fetchParams
// );
// const fetchParams = {
//   method: 'GET',
//   headers: {
//     'X-API-KEY': '5670c9a2-89b2-4298-8684-205f80a5343f',
//     'Content-Type': 'application/json',
//   },
// };

const url = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1';

const fetchParams = {
  method: 'GET',
  headers: {
    'X-API-KEY': '1be6749b-dbf1-4f49-814f-8b1bf84b0931',
    'Content-Type': 'application/json',
  }
};

async function getData(url, data) {
  const response = await fetch(url, data);
  const body = response.json();
  const filmsData = await body;
  const movies = filmsData.films;
  // console.log(movies);

  for (let element of movies) {
    const description = await findDescription(element.filmId);
    element.description = description;
    container.append(pushBannerToHtml(element));
  };
}

getData(url, fetchParams);

async function findDescription(elem) {
  const url = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${elem}`;
  const response = await fetch(url, fetchParams);
  const body = await response.json();
  // console.log(body);
  return body.description;
}

function pushBannerToHtml(elem) {
  const bannerElement = document.createElement('div');
  bannerElement.className = 'banner';
  bannerElement.append(pushLinkToHtml(elem));
  return bannerElement;
}

function pushLinkToHtml(elem) {
  const linkElement = document.createElement('a');
  linkElement.href = `https://www.kinopoisk.ru/film/${elem.filmId}/`;
  linkElement.append(pushImgToHtml(elem), pushGenreToHtml(elem), pushMovieDetailsToHtml(elem))
  return linkElement;
}

function pushImgToHtml(elem) {
  const imgElement = document.createElement('img');
  imgElement.src = elem.posterUrlPreview;
  // console.log(imgElement);
  return imgElement;
}

function pushGenreToHtml(elem) {
  const genreElement = document.createElement('div');
  genreElement.className = 'genre';
  genreElement.textContent = elem.genres.map(gen => gen.genre).join(', ');
  // console.log(genreElement);
  return genreElement;
}

function pushMovieDetailsToHtml(elem) {
  const detailsElement = document.createElement('div');
  detailsElement.className = 'movie-details';
  detailsElement.append(pushYearToHtml(elem), pushNameToHtml(elem), pushDescriptionToHtml(elem));
  return detailsElement;
}

function pushNameToHtml(elem) {
  const nameElement = document.createElement('h3');
  nameElement.textContent = elem.nameRu;
  // console.log(nameElement);
  return nameElement;
}
function pushYearToHtml(elem) {
  const yearElement = document.createElement('p');
  yearElement.className = 'year';
  yearElement.textContent = elem.year;
  // console.log(yearElement);
  return yearElement;
}

function pushDescriptionToHtml(elem) {
  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = elem.description;
  return descriptionElement;
}