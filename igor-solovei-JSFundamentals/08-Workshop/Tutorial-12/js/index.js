/* 
    Объявить функцию с тремя параметрами Третий аргумент - 0 по умолчания
    Если первый элемент не массив - The first parameter should be an array
    Создаем newArray
    Цикл по всем элементам массива + проверка 
    Если текущий элемент массива == 2 аргументу
    то добавить в newArray значение 3 аргумента
    иначе - добавить этот элемент без изменения в newArray
    вернуть новый массив newArray
*/

function replaceInArray(elements, searchItem, replaceItem = 0) {
  if (!Array.isArray(elements)) {
    return "The first parameter should be an array;";
  }

  let newArray = [];
  for (let element of elements) {
    if (element === searchItem) {
      newArray.push(replaceItem);
    } else {
      newArray.push(element);
    }
  }
  return newArray;
}

console.log(replaceInArray(123, 2, 3));
console.log(replaceInArray([2, 1, 2, 3], 2, 3));
console.log(replaceInArray([8, 7, 6, "", 10], "")); //[8, 7, 6, 0, 10]


