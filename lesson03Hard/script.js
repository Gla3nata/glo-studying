'use strict';

//  a)
let lang = 'ru';

if (lang === 'ru') {
    console.log('понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
} else if (lang === 'en') {
    console.log('monday, tuesday, wednesday, thursday, friday, saturday, sunday');
} else {
    console.log('Неизвестный язык');
}

//  b)

switch (lang) {
    case 'ru':
        console.log('понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
        break;
    case 'en':
        console.log('monday, tuesday, wednesday, thursday, friday, saturday, sunday');
        break;
    default:
        console.log('Неизвестный язык');
}
//  c)

const days = {
    ru: ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
    en: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
};
console.log(days[lang] ? days[lang].join(', ') : 'Неизвестный язык');

// 2

const namePerson = "Артем";

const result = namePerson === "Артем" ? "директор" :
    namePerson === "Александр" ? "преподаватель" : "студент";

console.log(result); 
