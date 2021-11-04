/*1. Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального
поиска и замены.*/

let str = 'aaa@bbb@ccc';

let newstr = str.replace(/@/gi, "!");
console.log(newstr);

/*2. В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту
дату в формат 31/12/2025.*/


str = "2025-12-31";

let arr = str.split("-");
console.log(arr);

newstr = arr[2] + '/' + arr[1] + '/' +arr[0];
console.log(newstr);


/*3. Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово
«javascript» тремя разными способами (через substr, substring, slice).*/

str = "Я учу javascript!";

console.log(str.substr(2, 4), str.substr(6, 10));
console.log(str.substring(2, 5), str.substring(6, 16));
console.log(str.slice(2, 5), str.slice(6, 16));


/*4. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень
из суммы кубов его элементов. Для решения воспользуйтесь циклом for.*/

arr = [4, 2, 5, 19, 13, 0, 10];

let sum = 0;

for(let i = 0; i < arr.length; i++) {
    sum += Math.pow(arr[i],3);
}

console.log(Math.sqrt(sum));


/*5. Даны переменные a и b. Отнимите от a переменную b и результат
присвойте переменной c. Сделайте так, чтобы в любом случае в переменную
c записалось положительное значение. Проверьте работу скрипта при a и b,
равных соответственно 3 и 5, 6 и 1.*/

function abc(a, b) {
    let c = Math.abs(a - b);

    console.log(c);
}

abc(3, 5);
abc(6, 1);


/*6. Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014.
Для решения этой задачи напишите функцию, которая будет добавлять 0
перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014
сделает 01.09.2014).*/


let timeDate = new Date;

function getZero (i) {
    if (i > 0 && i < 10) {
        return "0" + i;
    } else {
        return i;
    }

}

document.write(getZero(timeDate.getHours()) + ':' + getZero(timeDate.getMinutes()) + ':' + getZero(timeDate.getSeconds()) + ' ' + getZero(timeDate.getDate()) + '.' + getZero(timeDate.getMonth() + 1) + '.' + timeDate.getFullYear());








