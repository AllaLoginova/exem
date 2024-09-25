let colors = ['red', 'orange', 'yellow', 'green', 'aqua', 'blue', 'violet'];
let currentColor = 0;

setInterval(function go() {
    let div = document.getElementById('cube');
    currentColor++;
    if (currentColor >= colors.length)
        currentColor = 0;
    div.style.backgroundColor = colors[currentColor];
}, 1000);

const addData = document.querySelector('#link');
const findUl = document.querySelector('#ulId')

addData.addEventListener('click', () => {
    const newLink = document.createElement('li');
    findUl.append(newLink);
    newLink.innerHTML = '<a href="#">Новая ссылка</a>';

})

const addData2 = document.querySelector('#date');
const findUl2 = document.querySelector('#dates');

addData2.addEventListener('click', () => {
    const newLink2 = document.createElement('p');
    findUl2.append(newLink2);
    const now = new Date();
    
    newLink2.innerHTML = `<span>${now}</span><a href="#">Читать&#8230;</a>`;

})

// clickCounter

const findCount = document.querySelector('#clickCounter');
let min = 30;
let max = 50;
let num = Math.floor(min + Math.random() * (max + 1 - min));
let counter = 0;

window.addEventListener('click', () => {
    if (counter < num)
        counter++;
    else
        return;
    findCount.innerText = `Счётчик кликов: ${counter}`
    if (counter == num) {
        alert('Клики закончились');
        // break;
    }
})    


