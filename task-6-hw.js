("use strict");


let total = 0;

do {
  let input = prompt("Введите любое число");

  if (input === null) {
    break;

  } else {
    total += Number(input);
  }
} while (true);

alert(`Общая сумма чисел равна ${total}`);