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

let allServicePrices;

const getAllServicePrices = function () {
    return servicePrice1 + servicePrice2
}

allServicePrices = getAllServicePrices()
console.log('ВЫхвали функцию с сумой всех услуг')

function getFullPrice() {
    return screenPrice + allServicePrices
}

fullPrice = getFullPrice();

let newTitle = '';

const getTitle = function () {
    return titleProject[0].toUpperCase() + titleProject.slice(1).toLocaleLowerCase()
}

newTitle = getTitle();

const getServicePercentPrices = function () {
    return fullPrice - servicePercentPrice
}

