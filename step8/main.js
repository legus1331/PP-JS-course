const tabMenu = document.querySelectorAll('.tab-link')
const tabContent = document.querySelectorAll('.tab-pane')
const tabNum = document.querySelectorAll('.tab-num')

console.log(tabMenu);
console.log(tabContent);

tabMenu.forEach((tabLink, index) => {
    tabLink.addEventListener('click', () => {
        tabMenu.forEach(tabItem => {
            tabItem.classList.remove('is--active')
        })
        tabContent.forEach(tabItem => {
            tabItem.classList.remove('active')
        })
        tabLink.classList.add('is--active')
        tabContent[index].classList.add('active')
    })
})
tabNum.forEach((item, index) => {
    item.textContent = index + 1

})