'use strict';
const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const daysContainer = document.getElementById('days');
const today = new Date();
let currentDayIndex = today.getDay(); 

currentDayIndex = currentDayIndex === 0 ? 6 : currentDayIndex - 1;

let daysHTML = '';
for (let i = 0; i < week.length; i++) {
    let dayHTML = week[i];
    
    if (i === currentDayIndex) {
        dayHTML = '<b>' + dayHTML + '</b>';
    }

    if (i === 5 || i === 6) { 
        dayHTML = '<i>' + dayHTML + '</i>';
    }
    
    daysHTML += '<p>' + dayHTML + '</p>';
}

daysContainer.innerHTML = daysHTML;