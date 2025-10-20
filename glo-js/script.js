'use strict';

const title = prompt("Как называется ваш проект");
const screens = prompt("Какие типы экранов нужно разработать Например: 'Простые, Сложные, Интерактивные'");
const screenPrice = prompt("Сколько будет стоить данная работа?");
const adaptive = confirm("Нужен ли адаптив на сайте?");

const expenses1 = prompt('Какой дополнительный тип услуги нужен?', 'анимация');
const servicePrice1 = prompt("Сколько это будет стоить?", '3000');
const expenses2 = prompt('Какой дополнительный тип услуги нужен?', 'форма обратной связи');
const servicePrice2 = prompt("Сколько это будет стоить?", '5500');

const fullPrice = (Number(screenPrice)) + (Number(servicePrice1)) + (Number(servicePrice2));

let rollback = 10;
rollback = fullPrice * (rollback/100);

const servicePercentPrice = fullPrice - rollback;
console.log("Итог: " + Math.ceil(servicePercentPrice));

if (fullPrice > 30000) {
    console.log('Даем скидку в 10%');
} else if ( fullPrice >= 15000 && fullPrice <= 30000) {
    console.log('Даем скидку в 5%');
} else if (fullPrice < 15000 && fullPrice > 0) {
    console.log('Скидка не предусмотрена');
}  else {
    console.log('Что то пошло не так');
}


// 10) Написать конструкцию условий (расчеты приведены в рублях) (вывести в консоль)
//   - Если fullPrice больше 30000, то “Даем скидку в 10%” 
//   - Если fullPrice больше 15000 и меньше 30000, то сообщение “Даем скидку в 5%” 
//   - Если fullPrice меньше 15000 и больше 0 то в консоль вывести сообщение “Скидка не предусмотрена” 
//   - Если отрицательное значение то вывести “Что то пошло не так” 
//   - Учесть варианты 0, 15000 и 30000(к какому уровню не важно)

