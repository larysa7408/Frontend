// let promise = fetch(
//     'https://kinopoiskapiunofficial.tech/api/v2.2/films',
//     fetchParams
// );

const fetchParams = {
    method: 'GET',
    headers: {
      'X-API-KEY': '5670c9a2-89b2-4298-8684-205f80a5343f',
      'Content-Type': 'application/json',
    },
};

async function fetchFilms() {
    try {
        const response = await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1', fetchParams);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data); // для проверки что данные приходят
        displayFilms(data.films);
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

function displayFilms(films) {
    const mainDiv = document.querySelector('.main');
    mainDiv.innerHTML = ''; // Очистка содержимого перед добавлением новых фильмов


    films.forEach(film => {
        const article = document.createElement('article');
        article.classList.add('article');
        article.style.backgroundImage = `linear-gradient(transparent 50%, black 90%), url(${film.posterUrlPreview})`;

        const genreDiv = document.createElement('div');
        genreDiv.classList.add('genre');
        genreDiv.textContent = film.genres.map(genre => genre.genre).join(', ');

        const filmInfoDiv = document.createElement('div');
        filmInfoDiv.classList.add('film-info');

        const yearDiv = document.createElement('div');
        yearDiv.classList.add('year');
        yearDiv.textContent = film.year;

        const nameDiv = document.createElement('div');
        nameDiv.classList.add('name');
        nameDiv.textContent = film.nameRu;

        const descriptionDiv = document.createElement('div');
        descriptionDiv.classList.add('description');
        descriptionDiv.textContent = film.description || 'Описание отсутствует';

        filmInfoDiv.appendChild(yearDiv);
        filmInfoDiv.appendChild(nameDiv);
        filmInfoDiv.appendChild(descriptionDiv);
        
        article.appendChild(genreDiv);
        article.appendChild(filmInfoDiv);

        mainDiv.appendChild(article);
    });
}

fetchFilms();