/* Задание 2 : Создайте переменные a1, a2, a3, a4, a5, a6, a7 (нужна для решения 4 задания), a8, a9,
a10, a11, a12, a13, a14, a15, a16, a17, a18. Поместите в них и выведите в консоль
результат выражений:*/

let a1 = 5 % 3;
console.log(a1, typeof a1);

let a2 = 3 % 5;
console.log(a2, typeof a2);

let a3 = 5 + '3';
console.log(a3, typeof a3);

let a4 = '5' - 3;
console.log(a4, typeof a4);

let a5 = 75 + 'кг';
console.log(a5, typeof a5);

let a6 = 785 * 653;
console.log(a6, typeof a6);

let a7 = 100 / 25;
console.log(a7, typeof a7);

let a8 = 0 * 0;
console.log(a8, typeof a8);

let a9 = 0 / 2;
console.log(a9, typeof a9);

let a10 = 89 / 0;
console.log(a10, typeof a10);

let a11 = 98 + 2;
console.log(a11, typeof a11);

let a12 = 5 - 98;
console.log(a12, typeof a12);

let a13 = (8 + 56 * 4) / 5;
console.log(a13, typeof a13);

let a14 = (9 -12) * 7 / (5 + 2);
console.log(a14, typeof a14);

let a15 = +'123';
console.log(a15, typeof a15);

let a16 = 1 || 0;
console.log(a16, typeof a16);

let a17 = false || true;
console.log(a17, typeof a17);

let a18 = true > 0;
console.log(a18, typeof a18);



/* Задание 3 : Напишите скрипт, который находит площадь прямоугольника высотой 23см и
шириной 10см, значение высоты и ширины должны хранится в width и height,
соответственно, а значение площади должно хранится в числовой переменной SPryam.*/

let width = 23;
let height = 10;
let Spryam = width * height + 'см2';

console.log(Spryam);



/* Задание 4 : Напиши скрипт, который находит объем цилиндра высотой 10м и диаметром
основания равным значению переменной a7 из задания 2, результат поместите в
переменную VCilindra.*/

let VCilindra = 3.14 * a7 * 10 + 'м3';

console.log(VCilindra);


/* Задание 5 : Найдите площадь круга (SKruga) с радиусом 5см (r). */

let r = 5;
let SKruga = 3.14 * (r * 2) + 'см2';

console.log(SKruga);


/* Задание 6 : Найдите площадь трапеции (STrap) с основаниями 5см (a) и 7см (b), и высотой 10см
(h). */

let a = 5;
let b = 7;
let STrap = ((a + b) * 10) / 2 + 'см2';

console.log(STrap);


/* Даны: размер ипотечного кредита (S - 2 млн. руб), процентная годовая ставка (p - 10%),
кол-во лет (years - 5). Найти переплату по кредиту, значение переплаты должно
содержаться в переменной Pereplata. */

let S = 2;
let p = 10;
let Pereplata = (2 / 10) * 5 + 'млн. руб';

console.log(Pereplata);


/* Решите уравнения (найдите неизвестный x), где a = 8, b = 3:
a+2(x-b)=16;
b(x+15)=a+6x;
x+2x+ax+bx=23780. */

// 1.

a = 8;
b = 3;
let x = (16 - a + 2 * b) / 2;

console.log(x);

// 2.

x = (a - 15 * b) / (b -6);

console.log(x);

// 3.

x = 23780 / (3 + a + b);

console.log(x);





