let divElem = $.create('div');
divElem.html('Text text text...');

console.log(divElem);

let h2Elem = $.create('h2');
h2Elem.html('Header 2');

h2Elem.addClass('title2');

console.log(h2Elem);


let myBtn = $.create('button');
myBtn.html('My button');

document.body.append(myBtn);

myBtn.on('click', function() {
    alert('Click');
});


let links = $.search('a');
console.log(links)


let div2Elem = $.create('div');
div2Elem.html('Eaque, veniam <span>temporibus vel</span> impedit dolores neq');

console.log(div2Elem);

let spanDiv2Elem = div2Elem.search('span');
console.log(spanDiv2Elem);


let list1 = $.search('#list1');
console.log(list1);

let items = list1.search('li');
console.log(items);

let p2 = $.search('.p2');
console.log (p2);

//p2.removeClass('p2'); // Удаляем класс.

//p2.toggleClass("Lalala"); // Добавляем класс.

p2.attr("id", "232323"); // Добавляем аттрибут и значение.

let att = p2.attr("id", ""); // Получаем значение атрибута id.

console.log (att);

let h1 = $.search ('h1');
console.log(h1);


let div3 = $.create('div').html('Bla bla bla').addClass('my-block').toggleClass("dfdfdfdf");

div3.appendElem(h1); // Помещаем элемент в конец.

div3.appendElem(p2, h1); // Помещаем элемент перед предыдущим.

console.log(div3);


