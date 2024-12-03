// 1. создать массив 3 разными способами

// 1.1)
// let arr = [1, 5, 4, 0, 14];
// alert(arr);

// 1.2)
// let arr1 = [];
// for (let i = 0; i < 5; i++) {
//     arr1[i] = i + 1;
// }
// alert(arr1);

// 1.3)
// let input = prompt("Введите список, разделяя его запятой и без пробелов:");
// let arr2 = input.split(",");
// alert(arr2);



// 2. выведите на экран 5 член вашего массива затем измените его значение 

// let arr = [4, 9, 6, 13, 8];
// alert(arr[4]);
// arr[4] = prompt("Замените элемент массива на другой:");
// alert(arr);



// 3. узнайте длину вашего массива и выведите ее значение при наведении на любой элемент



// 4. выведите все элементы массива, используя цикл for

// let arr = [1, 5, 8, 2, 4, 6];
// for (let i = 0; i < arr.length; i++) {
//     alert(arr[i]);
// }



// 5. создайте 2 массива. Объедините их в один и выведите на экран полученный массив

// let arr1 = [1, 2, 3, 4], arr2 = [5, 6, 7, 8];
// let arr3 = arr1;
// for (let i = 0; i < arr2.length; i++) {
//     arr3.push(arr2[i]);
// }
// alert(arr3);



// 6. Удалите последний член получившегося массива и выведите это значение на экран

// alert(arr3.pop());
// alert(arr3);



// 8. Добавьте новый элемент в начало вашего объединенного массива

// arr3.unshift(0);
// alert(arr3);



// 9. Получите сегодняшнюю дату и выведите ее на экран

// let now = new Date().toLocaleDateString();
// alert(now);



// 10. Выведите сегодняшнюю дату в формате 11 ноября 2020 года

// let now = new Date().toLocaleDateString();
// let date = now.split(".")
// let month;
// switch (date[1]) {
//     case "01": month = "января"; break;
//     case "02": month = "февраля"; break;
//     case "03": month = "марта"; break;
//     case "04": month = "апреля"; break;
//     case "05": month = "мая"; break;
//     case "06": month = "июня"; break;
//     case "07": month = "июля"; break;
//     case "08": month = "августа"; break;
//     case "09": month = "сентября"; break;
//     case "10": month = "октября"; break;
//     case "11": month = "ноября"; break;
//     case "12": month = "декабря"; break;
// }
// alert(`${date[0]} ${month} ${date[2]} года`);



// 11. напишите функцию, подсчитывающую произведение двух случайных чисел в промежутке от нуля до 50

// function rand(max) {
//     alert(Math.trunc(Math.random() * max) * Math.trunc(Math.random() * max));
// }
// rand(51);