
let numberOfFilms;

function start() {
   numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
   }
}

start();

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   private: false,
};



function rememberMyFilms() {
   for (let i = 0; i < 2; i++) {
      const a = prompt('Один из последних просмотренных фильмов', ''),
         b = prompt('На сколько оцените его', '');
      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
         personalMovieDB.movies[a] = b;
      } else {
         i--;
      }
   }
}

//rememberMyFilms();



function detectedPersonalLevel() {
   if (personalMovieDB.count < 10) {
      alert('Просмотрено довольно мало фильмов');
   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      alert('Вы классический зритель');
   } else if (personalMovieDB.count >= 30) {
      alert('Вы киноман');
   } else {
      alert('Произошла ошибка');
   }
}

//detectedPersonalLevel();

function showMyDB(hidden) {
   if (!hidden) {
      console.log(personalMovieDB);
   }
}
showMyDB(personalMovieDB.private);

function writeYourGenres() {
   for (let index = 1; index <= 3; index++) {
      personalMovieDB.genres[index - 1] = prompt(`Ваш любимый жанр под номером ${index}`);
   }
}

writeYourGenres();


