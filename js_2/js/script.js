/* Определите по введенному возрасту (исп. значение из задания 1) год рождения.
Выведите на экран «%Имя% родился в %Год% году.». */


let you_name = prompt("Ваше имя?")
    you_age = prompt("Ваш возраст?")
    year_of_birth = 2021 - you_age;
    day_of_birthday = confirm('Ваш День Рождения уже был в этом году?');

if (day_of_birthday == true) {
    document.write(`${you_name} родился в ${year_of_birth} году`);
} else {
    document.write(`${you_name} родился в ${year_of_birth - 1} году`);
}



