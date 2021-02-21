


const personalMovieDB = {
   count: 0,
   movies: {},
   actors: {},
   genres: [],
   private: false,
   start: function () {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');
      while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
         personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');
      }
   },
   rememberMyFilms: function () {
      for (let i = 0; i < 2; i++) {
         const a = prompt('Один из последних просмотренных фильмов', ''),
            b = prompt('На сколько оцените его', '');
         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
         } else {
            i--;
         }
      }
   },
   detectedPersonalLevel: function () {
      if (personalMovieDB.count < 10) {
         alert('Просмотрено довольно мало фильмов');
      } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
         alert('Вы классический зритель');
      } else if (personalMovieDB.count >= 30) {
         alert('Вы киноман');
      } else {
         alert('Произошла ошибка');
      }
   },
   showMyDB: function (hidden) {
      if (!hidden) {
         console.log(personalMovieDB);
      }
   },
   toggleVisibleMyDB: function () {
      if (personalMovieDB.private) {
         personalMovieDB.private = false;
      } else {
         personalMovieDB.private = true;
      }
   },

   writeYourGenres: function () {
      for (let index = 1; index <= 3; index++) {
         let genre = prompt(`Ваш любимый жанр под номером ${index}`);

         if (genre == '' || genre == null) {
            console.log('Вы ввели некорректные данные или не ввели их вовсе');
            index--;
         } else {
            personalMovieDB.genres[index - 1] = genre;
         }
      }
      personalMovieDB.genres.forEach((item, i) => {
         console.log(`Любимый жанр ${i + 1} - это ${item}`);
      });
   },
};







