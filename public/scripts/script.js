var weatherWrap = document.querySelector('.fiveDay-wrapper');
var forecasts = document.querySelector('#fiveDay-forecasts');

weatherWrap.addEventListener('load', function() {
    forecasts.classList.add('animated slideInLeft');

})