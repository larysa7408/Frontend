// let promise = fetch(
//     'https://kinopoiskapiunofficial.tech/api/v2.2/films',
//     fetchParams
// );

const fetchParams = {
    method: 'GET',
    headers: {
      'X-API-KEY': '24d12351-79aa-4719-a902-237e13ded930',
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

async function fetchFilmDescription(filmId, descriptionDiv) {
    try {
        const response = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${filmId}`, fetchParams);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        descriptionDiv.textContent = data.description;
        return data.description || 'Описание отсутствует';
    } catch (error) {
        console.error('Ошибка:', error);
        return 'Ошибка при получении описания';
    }
}

async function displayFilms(films) {
    const mainDiv = document.querySelector('.main');
    mainDiv.innerHTML = ''; // Очистка содержимого перед добавлением новых фильмов
    
                          //.slice(0, 20)
    // for (const film of films) {
    const filmElems = films.map((film) => {
        const article = document.createElement('article');
        article.classList.add('article');
        article.style.backgroundImage = `linear-gradient(transparent 50%, black 90%), url(${film.posterUrlPreview})`;

        const genreDiv = document.createElement('div');
        genreDiv.classList.add('genre');
        // Отображение только первого жанра
        genreDiv.textContent = film.genres.length > 0 ? film.genres[0].genre : 'Жанр отсутствует';

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
        fetchFilmDescription(film.filmId, descriptionDiv);
        

        filmInfoDiv.appendChild(yearDiv);
        filmInfoDiv.appendChild(nameDiv);
        filmInfoDiv.appendChild(descriptionDiv);

        article.appendChild(genreDiv);
        article.appendChild(filmInfoDiv);

        return article;

        

    })
    mainDiv.append(...filmElems)
    //const description = await fetchFilmDescription(film.filmId);
    // descriptionDiv.textContent = description;
    }
// }

fetchFilms();
