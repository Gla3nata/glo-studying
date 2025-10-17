let title = "study-glo";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 484930;
let rollback = 13;
let fullPrice = 100000;
let adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);
console.log("Стоимость верстки экранов " + screenPrice +" рублей. " + "Стоимость разработки сайта " +fullPrice +" рублей" );

console.log(screens.toLowerCase());
screens = screens.split(/\s*,\s*/);
console.log(screens);

console.log("Процент отката посреднику за работу " + fullPrice * (rollback/100));