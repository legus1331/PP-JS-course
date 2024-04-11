// let titleProject = 'Калькулятор по разработке сайта'
// let screensValue = 'шаблонные, с уникальным дизайном, с анимациями'
// let screenPrice = 10000
// let percentage = 10
// let fullPrice = 100000
// let responsive = true

// console.log(titleProject, screenPrice, screenPrice, percentage, fullPrice, responsive);

let screenPrice = 10000
let percentage = 10


let titleProject = prompt('Название проекта')
console.log(titleProject);

let screensValue = prompt('шаблонные, с уникальным дизайном, с анимациями')
console.log(screensValue);

let responsive = prompt('нужен ли респонсивный сайт?')
let condition = (responsive == 'Да');
if (condition) {
    (responsive != 'Да')
}
console.log(condition);

let service1 = prompt('Какой сервис нужен?')
console.log(service1);
let servicePrice1 = +prompt('Сколько это будет стоить?')
console.log(servicePrice1);
let service2 = prompt('Какой еще сервис тебе нужен?')
console.log(service2);
let servicePrice2 = +prompt('Сколько будет стоить этот второй сервис?')
console.log(servicePrice2);

let fullPrice = screenPrice + servicePrice1 + servicePrice2
console.log(fullPrice);

let percentageResult = +(fullPrice * (percentage / 100))
console.log(percentageResult, 'Процент подрядчику: ')

let servicePercentPrice = fullPrice - percentageResult
console.log(Math.ceil(servicePercentPrice), 'Итоговая сумма за вычетом процента');

if (fullPrice > 50000) {
    console.log('Делаем скидку 10%')
} else if (fullPrice > 20000 && fullPrice < 40000) {
    console.log('Делаем скидку 5%')
} else if (fullPrice < 20000 && fullPrice > 0) {
    console.log('Скидка не предусмотрена')
} else if (fullPrice < 0) {
    console.log('Что то пошло не так')
} else if (fullPrice === 0 || fullPrice === 20000 || fullPrice === 50000) {
    console.log('Проверка на строгое равенство')
}
