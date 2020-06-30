'use strict'

let cost;

const countryToDeliver = prompt("В какую страну требуется доставка?");

if (countryToDeliver == null) {
    console.log("Отменено пользователем.")
}

switch (countryToDeliver.toLowerCase()) {
    case "china":
        cost = 100;
        console.log(`Доставка в ${countryToDeliver} будет стоить ${cost} кредитов`);
        break;

    case "chile":
        cost = 250;
        console.log(`Доставка в ${countryToDeliver} будет стоить ${cost} кредитов`);
        break;

    case "australia":
        cost = 170;
        console.log(`Доставка в ${countryToDeliver} будет стоить ${cost} кредитов`);
        break;

    case "india":
        cost = 80;
        console.log(`Доставка в ${countryToDeliver} будет стоить ${cost} кредитов`);
        break;

    case "jamaica":
        cost = 120;
        console.log(`Доставка в ${countryToDeliver} будет стоить ${cost} кредитов`);
        break;

    default: alert("В вашей стране доставка не доступна");
}