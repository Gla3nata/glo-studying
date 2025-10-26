'use strict';

const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    service1: '',
    service2: '',
    start: function () {
        this.asking();
        this.allServicePrices = this.getAllServicePrices();
        this.fullPrice = this.getFullPrice();
        this.servicePercentPrice = this.getServicePercentPrices();
        this.title = this.getTitle();
        this.logger();
    },
    asking: function () {
        appData.title = prompt('Как называется ваш проект', 'Калькулятор');
        appData.screens = prompt('Какие типы экранов нужно разработать', 'Простые, Сложные, Интерактивные');

        do {
            appData.screenPrice = prompt('Сколько будет стоить данная работа?');
        } while (!appData.isNumber(appData.screenPrice))

        appData.adaptive = confirm('Нужен ли адаптив на сайте?');
    },
    logger: function () {
        for (let key in this) {
            if (typeof this[key] !== 'function') {
            console.log(key + ': ' + this[key]);
        }
        }
    },

    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num)
    },
    getAllServicePrices: function () {
        let sum = 0

        for (let i = 0; i < 2; i++) {
            let price;

            if (i === 0) {
                appData.service1 = prompt('Какой дополнительный тип услуги нужен?');
            } else if (i === 1) {
                appData.service2 = prompt('Какой дополнительный тип услуги нужен?');
            }

            do {
                price = prompt('Сколько будет стоить данная работа?');
            } while (!appData.isNumber(price))
            sum += +price;
        }
        return sum
    },
    getFullPrice: function () {
        return +appData.screenPrice + appData.allServicePrices
    },
    getServicePercentPrices: function () {
        return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
    },
    getTitle: function () {
        let processedTitle = appData.title.trim().toLowerCase();
        return processedTitle.charAt(0).toUpperCase() + processedTitle.slice(1);
    },
    getrollbackMessage: function (price) {
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
}


appData.start()

