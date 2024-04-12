const closeBtn = document.querySelector('.close-btn');
const row = document.querySelector('.row');
const heading = document.querySelector('h1');

console.log(closeBtn);
console.log(row);
console.log(heading);

document.addEventListener('click', function (event) {
    if (event.target.closest('.row')) {
        if (event.target.closest('.close-btn')) {
            row.style.display = 'none';
        }
    } else {
        row.style.display = 'none';
    }
});