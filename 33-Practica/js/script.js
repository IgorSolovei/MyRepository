'use strict';

document.addEventListener('DOMContentLoaded', function () {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };



    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector(".promo__genre").textContent = 'драма',
        movieLIst = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type = "checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorit = checkbox.checked;
        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }
            if (favorit) {
                console.log("добвлен люимый фильм");
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            creatMoviList(movieDB.movies, movieLIst);
        }

        event.target.reset();

    });



    const deleteAdv = (arr) => {
        arr.forEach(i => {
            i.remove();
        });
    };
    deleteAdv(adv);

    const makeChanges = () => {
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };
    makeChanges();

    const sortArr = (arr) => {
        arr.sort();
    };


    function creatMoviList(films, parent) {
        parent.innerHTML = '';
        sortArr(films);
        films.forEach((film, i) => {
            parent.innerHTML += `
            <li class ="promo__interactive-item">${i + 1}. ${film}
                <div class="delete"></div>
            </li>
            `;
        });
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                creatMoviList(films, parent);
            });
        });
    }

    creatMoviList(movieDB.movies, movieLIst);
});



