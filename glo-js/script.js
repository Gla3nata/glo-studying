'use strict';

let title = prompt("Как называется ваш проект");
let screens = prompt("Какие типы экранов нужно разработать Например: 'Простые, Сложные, Интерактивные'");
let screenPrice = prompt("Сколько будет стоить данная работа?");
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt('Какой дополнительный тип услуги нужен?', 'анимация');
let servicePrice1 = prompt("Сколько это будет стоить?", '3000');
let service2 = prompt('Какой дополнительный тип услуги нужен?', 'форма обратной связи');
let servicePrice2 = prompt("Сколько это будет стоить?", '5500');
let rollback = 10;
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = fullPrice - (fullPrice * (rollback/100));

const showTypeOf = function(variable) {
    console.log(variable, typeof variable);
}


const getrollbackMessage = function (price) {
if (price >= 30000) {
    return 'Даем скидку в 10%'
} else if ( price >= 15000 && price < 30000) {
    return 'Даем скидку в 5%'
} else if (price >= 0 && price < 15000) {
    return'Скидка не предусмотрена'
}  else {
    return 'Что то пошло не так'
}
}
const getAllServicePrices = function () {
   let allServicePrices = servicePrice1 + servicePrice2
   return allServicePrices;
}
function getFullPrice () {
   let fullPrice = screenPrice + getAllServicePrices()
   return fullPrice;
}

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(getrollbackMessage(fullPrice));
console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);

console.log(screens.length);
console.log(servicePercentPrice);

console.log("Итог: " + Math.ceil(servicePercentPrice));
