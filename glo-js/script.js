'use strict';
let title
let screens
let screenPrice
let adaptive
let rollback = 10
let service1
let service2
let allServicePrices
let fullPrice
let servicePercentPrice

console.log();

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
}

const asking = function () {
    title = prompt('Как называется ваш проект', 'Калькулятор');
    screens = prompt('Какие типы экранов нужно разработать', 'Простые, Сложные, Интерактивные');

    do {
        screenPrice = prompt('Сколько будет стоить данная работа?');
    } while (!isNumber(screenPrice))

    screenPrice = +screenPrice;
    adaptive = confirm('Нужен ли адаптив на сайте?');
}

const getAllServicePrices = function () {
    let sum = 0
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service1 = prompt('Какой дополнительный тип услуги нужен?');
        } else if (i === 1) {
            service2 = prompt('Какой дополнительный тип услуги нужен?');
        }
        let servicePrice;
        do {
            servicePrice = prompt('Сколько будет стоить данная работа?');
        } while (!isNumber(servicePrice))
        sum += +servicePrice;
    }
    return sum
}

const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
}

const getFullPrice = function () {
    return screenPrice + allServicePrices
}
const getServicePercentPrices = function () {
    return fullPrice - (fullPrice * (rollback / 100));
}

function getTitle() {
    let processedTitle = title.trim().toLowerCase();
    return processedTitle.charAt(0).toUpperCase() + processedTitle.slice(1);
}

const getrollbackMessage = function (price) {
    if (price >= 30000) {
        return 'Даем скидку в 10%'
    } else if (price >= 15000 && price < 30000) {
        return 'Даем скидку в 5%'
    } else if (price >= 0 && price < 15000) {
        return 'Скидка не предусмотрена'
    } else {
        return 'Что то пошло не так'
    }
}

asking()
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log('allServicePrices', allServicePrices);

console.log(getrollbackMessage(fullPrice));
console.log(screens.length);
console.log(servicePercentPrice);
console.log('Итог: ' + Math.ceil(servicePercentPrice));