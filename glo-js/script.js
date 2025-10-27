'use strict';

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    services: {},
    start: function () {
        appData.asking();
        appData.getAllServicePrices();
        appData.getFullPrice();
        appData.getServicePercentPrices();
        appData.getTitle();
        appData.logger();
    },
    asking: function () {
        appData.title = prompt('Как называется ваш проект', 'Калькулятор');
        // appData.screens = prompt('Какие типы экранов нужно разработать');

        // do {
        //     appData.screenPrice = prompt('Сколько будет стоить данная работа?');
        // } while (!appData.isNumber(appData.screenPrice))

        for (let i = 0; i < 2; i++) {
            let name = prompt("Какие типы экранов нужно разработать")
            let price = 0;
            do {
                price = prompt('Сколько будет стоить данная работа?');
            } while (!appData.isNumber(price))

            appData.screens.push({ id: i, name: name, price: price })
        }
        for (let i = 0; i < 2; i++) {
            let name = prompt("Какой дополнительный тип услуги нужен?")
            let price = 0;

            do {
                price = prompt('Сколько будет стоить данная работа?(дополнительная)');
            } while (!appData.isNumber(price))

            appData.services[name] = +price
        }

        appData.adaptive = confirm('Нужен ли адаптив на сайте?');
    },
    getAllServicePrices: function () {
        for (let key in appData.services) {
            appData.allServicePrices += appData.services[key]
        }
    },
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num)
    },

    getFullPrice: function () {
        appData.fullPrice = +appData.screenPrice + appData.allServicePrices
    },
    getServicePercentPrices: function () {
        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
    },
    getTitle: function () {
        let processedTitle = appData.title.trim().toLowerCase();
        appData.title = processedTitle.charAt(0).toUpperCase() + processedTitle.slice(1);
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
    },
        logger: function () {
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                console.log(key + ': ' + this[key]);
            }
        }
        console.log(this.screenPrice + 'screenPrice')
    }
}


appData.start()

