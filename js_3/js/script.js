//1. Выведите числа от 1 до 50 и от 35 до 8.

let number = 1

while (number <= 50) {
    console.log(number);
    number++;
}

number = 38

while (number >= 8) {
    console.log(number);
    number--;
}



/*2. Выведите столбец чисел от 89 до 11 - воспользуйтесь циклом while и отделите числа
тегом <br /> друг от друга, чтобы получить столбец, а не строку.*/


number = 89

while (number >= 11) {
    document.write(number);
    document.write("<br>")
    number--;
}
document.write(`<br>`)

//3. С помощью цикла найдите сумму чисел от 0 до 100.


let sum = 0
for (let a = 1; a <= 100; a++){
    sum += a;
}
console.log(sum);


/*4. Найдите сумму чисел в каждом числе от 1 до 5, например: в числе 3 сумма составляет 6
(1+2+3).*/

sum = 0

for (a = 1; a <=5; a++) {
    sum += a;
    console.log(sum)
}


/*5. Выведите чётные числа от 8 до 56. Решить задание через while и for.*/


number = 6

while(number <= 56) {
    number++;
    if (number % 2 == 0){
    console.log(number);
    }
}



for (number = 8; number <= 56; number++) {
    if (number % 2 == 0) {
    console.log(number)
    }
}



/*(6. Необходимо вывести на экран полную таблицу умножения (от 2 до 10) в виде:*/

for (number = 2; number <= 10; number++) {
    for (let number1 = 1; number1 <= 10; number1++) {
        document.write
        (` ${number} &times ${number1} = ${number * number1}`)
        document.write("<br>")
    }
    document.write("<br>")
}





















