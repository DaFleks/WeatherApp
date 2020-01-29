const container = document.querySelector('.container');
const fiveDay = document.querySelector('.fiveDay-forecasts');

container.addEventListener('animationend', function() {
    fiveDay.style.display = 'flex';
})