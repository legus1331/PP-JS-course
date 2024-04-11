let screenPrice;
let percentage = 10
let allServicePrices;
let newTitle = '';
let titleProject;
let screensValue;
let responsive;
let service1;
let service2;


// циклы
const checkIsNumber = function (x) {
    return !isNaN(parseFloat(x)) && isFinite(x)
}

const asking = function () {
    titleProject = prompt('Название проекта', 'Калькулятор')
    screensValue = prompt('шаблонные, с уникальным дизайном, с анимациями', 'с анимациями')
    screenPrice = prompt('Сколько это будет стоить?', 12000)
    while (!checkIsNumber(screenPrice) || screenPrice.trim() === '' || screenPrice === null) {
        screenPrice = prompt('Сколько это будет стоить?', 12000)
    }
    screenPrice = Number(screenPrice)
    responsive = prompt('нужен ли респонсивный сайт?', 'Нужен')
}

const getAllServicePrices = function () {
    let sum = 0
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service1 = prompt('Какой дополнительный тип услуги нужен?', 'Услуга 1')
        } else if (i === 1) {
            service2 = prompt('Какой дополнительный тип услуги нужен?', 'Услуга 2')
        }
        let textFromPromt = '';
        while (!checkIsNumber(textFromPromt) || textFromPromt.trim() === '' || textFromPromt === null) {
            textFromPromt = prompt('Сколько это будет стоить?')
        }
        sum += Number(textFromPromt)
    }
    return sum
}


// функции
function getFullPrice() {
    return screenPrice + allServicePrices
}
const getServicePercentPrices = function () {
    return fullPrice - (fullPrice * (percentage / 100))
}
const getTitle = function () {
    return titleProject[0].toUpperCase() + titleProject.slice(1).toLocaleLowerCase()
}


// предоставление скидки
const getPercentageMessage = function (price) {
    if (price > 50000) {
        return 'Делаем скидку 10%'
    } else if (price > 20000 && price < 40000) {
        return 'Делаем скидку 5%'
    } else if (price < 20000 && price > 0) {
        return 'Скидка не предусмотрена'
    } else if (price < 0) {
        return 'Что то пошло не так'
    } else if (price === 0 || price === 20000 || price === 50000) {
        return 'Проверка на строгое равенство'
    }
}


asking()
allServicePrices = getAllServicePrices()
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
newTitle = getTitle();


// вызов консолей
console.log(newTitle);
console.log(allServicePrices);
console.log(fullPrice);
console.log(Math.ceil(servicePercentPrice));
console.log(getPercentageMessage(fullPrice));