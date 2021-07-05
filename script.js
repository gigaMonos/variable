"use strict"
/*
//обьявление переменной 
let myLifeSyle;
//присвоение значения
myLifeSyle = 'freelance';

// обьявление перменной и привоение значения в одном предлжении
let myLifeSyle = 'freelance';
console.log (myLifeSyle);
let myName = 'Фрилансер по жизни',
	meAge = 36,
	myMessage = 'Живи, а работай в свободное время';

//чтобы поменять данные 
//достаточно перезаписать значение
let myAge = 36;
myAge = 18;
console.log(myAge);

// предача значенний перемены
// с переменной в переменную 
let myAge = 36;
let myNewAge = 12; 
myAge = myNewAge;
console.log(myAge);
let myAge = 36;
console.log(myAge);

//область видимости переменных 
// видимость переменных только внутри блока инструкций 
function testBlock() {
	let myAge = 36;
	console.log(myAge);
}
testBlock();
console.log(myAge);//переменая не видна за пределами блока
let myAge = 18;
function testBlock() {
	let myAge = 36;
	console.log(myAge);
}
testBlock();
let myAge = 18;
console.log(myAge);

//поаторное обьвления переменной 
//в рамках одного блока запрещенно
let myAge = 36;
let myAge = 15;

// в тоже время внутри блока (нармер цикла), проблем нету 
//две одинаковые переменные внутри разных блоков
// не будут взаимосвязанны сс друг другом
for (let i = 0; i < 3; i++) {
	console.log(i);
}
for (let i = 0; i < 3; i++) {
	console.log(i);
}

//КОНСТАНТЫ 
//Обьяление константы
const myAge = 36; 
myAge = 18; //константу нельзя изменить

//именнаконстант с зарание известными значниями
const BLOCK_SIZE = 25;
const COLOR_RED ="#F00"
//имяконстатны со значанием присвоения 
//в процессе выполнения программы
const summSizes = 25 + 30;

const userProfile = {
	name: 'Freelncer',
	age: 36,
	message: 'elive'
}
console.log(userProfile);
//далее я меня значение одного из полей обьекта 
userProfile.age= 18;
//ошибки нет, данные изменились
console.log(userProfile);
*/
//домашка придумай имя переменной для хранения цвета глаз пользователя сайта
let colorEyes;
//обьяви две переменные  user b userName присвой значения вася переменной userName
let user = 'vasya',
	userName = 'vasya';
//скопируй значение узер нейм в переменную узер и выведи в констоль юзер
console.log()