
// 0. создать переменную, узнать ее тип, 
//    добавить вывод на экран текста, в зависимости от значения (if else)

function tst1() {
    let name = "john", type_name = typeof name;
    let age = 25, type_age = typeof age;
    alert(`Тип переменной "name": ${type_name}`);
    alert(`Тип переменной "age": ${type_age}`);
}



// 1. запросить у пользователя знак зодиака, и в зависимости от ответа 
// выдать всплывающее окно приветствия (вместо знака зодиака, 
// можно запросить другие данные, предполагающие несколько 
// вариантов ответа) (switch)

function tst2() {
    let month = prompt("Пожалуйста введите месяц своего рождения словом");
    month = month.toLowerCase();

    switch(month){
        case "январь": 
            alert("Новогодние на месте!");
            break;
        case "февраль": 
            alert("Защитники на месте!");
            break;
        case "март": 
            alert("Девочки на месте!");
            break;
        case "апрель": 
            alert("Шутники на месте!");
            break;
        case "май": 
            alert("Трудяги на месте!");
            break;
        case "июнь": 
            alert("Дети на месте!");
            break;
        case "июль": 
            alert("Самые жаркие на месте!");
            break;
        case "август": 
            alert("Октавиане на месте!");
            break;
        case "сентябрь": 
            alert("Школьники на месте!");
            break;
        case "октябрь": 
            alert("Октябрята на месте!");
            break;
        case "ноябрь": 
            alert("Народники на месте!");
            break;
        case "декабрь": 
            alert("Снежные на месте!");
            break;
        default:
            alert("В моей базе нет такого месяца, либо он введён неверно");
            break;
    }
}



// 4. Запросить у пользователя любое число больше 5, 
//    в случае правильного ответа выдать окошко с поздравлением, 
//    случае неправильного ответа вывести повторное окно с вопросом 
//    (помните, что пользователь может нажать "отмена", 
//    помните о типах данных)

function tst3() {
    let num = prompt("Введите любое число больше 5");

    while (true) {
        if (isNaN(num) == true) {
            num = prompt("ВВЕДИТЕ ЛЮБОЕ ЧИСЛО БОЛЬШЕ 5!");
            continue;
        } else if (typeof(num) == "object") {
            num = prompt("Никаких отмен, введите любое число больше 5");
            continue;
        } else if (isNaN(num) == false && Number(num) < 6) {
            num = prompt("Это меньше или равно 5, введите любое число больше 5");
            continue;
        } else if (isNaN(num) == false && Number(num) > 5) {
            alert("Верно! Поздравляю!");
            break;
        }   
    }
}



// 6. выведите нечетные числа от 1 до 7, пропустив 5
function tst4() {
    for (let i = 1; i < 8; i += 2) {
        if (i == 5) {
            continue;
        } else {    
            alert(i);
        }
    }
}



// 4. выведите все элементы массива, используя цикл for
function tst5() {
    let arr = [1, 5, 8, 2, 4, 6];
    for (let i = 0; i < arr.length; i++) {
        alert(arr[i]);
    }
}


// 5. создайте 2 массива. Объедините их в один и выведите на экран полученный массив

function tst6() {
    let arr1 = [1, 2, 3, 4], arr2 = [5, 6, 7, 8];
    for (let i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i]);
    }
    alert(arr1);



// 6. Удалите последний член получившегося массива и выведите это значение на экран

    alert(arr1.pop());
    alert(arr1);



// 8. Добавьте новый элемент в начало вашего объединенного массива

    arr1.unshift(0);
    alert(arr1);
}



// 10. Выведите сегодняшнюю дату в формате 11 ноября 2020 года

function tst7() {
    let now = new Date().toLocaleDateString();
    let date = now.split(".");
    let month;
    switch (date[1]) {
        case "01": month = "января"; break;
        case "02": month = "февраля"; break;
        case "03": month = "марта"; break;
        case "04": month = "апреля"; break;
        case "05": month = "мая"; break;
        case "06": month = "июня"; break;
        case "07": month = "июля"; break;
        case "08": month = "августа"; break;
        case "09": month = "сентября"; break;
        case "10": month = "октября"; break;
        case "11": month = "ноября"; break;
        case "12": month = "декабря"; break;
    }
    alert(`${date[0]} ${month} ${date[2]} года`);
}


//Тест сайта
function test() {
    let answers = ["let", "alert", "number", "break", "итерация",
                "continue", "[]", ".push", ".unshift", "isnan"];
    let user_answers = [user_ans_1 = document.getElementById("z_1").value,
                        user_ans_2 = document.getElementById("z_2").value,
                        user_ans_3 = document.getElementById("z_3").value,
                        user_ans_4 = document.getElementById("z_4").value,
                        user_ans_5 = document.getElementById("z_5").value,
                        user_ans_6 = document.getElementById("z_6").value,
                        user_ans_7 = document.getElementById("z_7").value,
                        user_ans_8 = document.getElementById("z_8").value,
                        user_ans_9 = document.getElementById("z_9").value,
                        user_ans_10 = document.getElementById("z_10").value];
    let count = 0;
    for (let i = 1; i < 11; i++) {
        if (user_answers[i-1].toLowerCase() == answers[i-1]) {
            count++;
            document.getElementById("ans_" + i).innerHTML = "Верно";
            document.getElementById("ans_" + i).style.color = "#008000";
        } else {
            document.getElementById("ans_" + i).innerHTML = "Неверно";
            document.getElementById("ans_" + i).style.color = "#ff0000";
        }
    }
    user_answers = [];
    if ([0, 1, 2, 3].includes(count)) {
        document.getElementById("count_answers").innerHTML = count;
        document.getElementById("count_answers").style.color = "#ff0000";
    }
    if ([4, 5, 6, 7].includes(count)) {
        document.getElementById("count_answers").innerHTML = count;
        document.getElementById("count_answers").style.color = "#ffa500";
    }
    if ([8, 9, 10].includes(count)) {
        document.getElementById("count_answers").innerHTML = count;
        document.getElementById("count_answers").style.color = "#008000";
    }
    document.getElementById("result").style.display = "block";
    document.getElementById("end").style.display = "block";
    document.getElementById("exm_end").style.display = "none";
}
function end() {
    let now = new Date().toLocaleDateString();
    let date = now.split(".");
    let month;
    switch (date[1]) {
        case "01": month = "января"; break;
        case "02": month = "февраля"; break;
        case "03": month = "марта"; break;
        case "04": month = "апреля"; break;
        case "05": month = "мая"; break;
        case "06": month = "июня"; break;
        case "07": month = "июля"; break;
        case "08": month = "августа"; break;
        case "09": month = "сентября"; break;
        case "10": month = "октября"; break;
        case "11": month = "ноября"; break;
        case "12": month = "декабря"; break;
    }
    document.getElementById("date").innerHTML = `${date[0]} ${month} ${date[2]} года`;
    document.getElementById("name").innerHTML = localStorage.getItem("username");
    document.getElementById("last_page").style.display = "block";
}
function close_page() {
    document.getElementById("last_page").style.display = "none";
    document.getElementById("end").style.display = "none";
}