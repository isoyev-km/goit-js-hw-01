'use strict'

const credits = 23580;
const pricePerDroid = 3000;

let totalPrice;
let moneyLeft;

let amountOfDroids = prompt('Сколько дроидов вы хотите приобрести?');
if (amountOfDroids == null) {
    console.log('Отменено пользователем!');
} else {
    totalPrice = amountOfDroids * pricePerDroid;
}

if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
} else {
    console.log(`Вы купили ${amountOfDroids} дроидов, на счету осталось ${credits-totalPrice} кредитов`);
}