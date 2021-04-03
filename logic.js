function weatherData(searchCity) {
    fetch('https://api.openweathermap.org/data/2.5/weather?appid=f0cf0e05c6a083652abc652573878297&q=' + `${searchCity}`, { mode: 'cors' })
        .then(function (response) {
            return response.json();

        })
        .then(function (response) {
            console.log(response);
            cityTemp.innerHTML = (response.main.temp - 273.15).toFixed(2);
            cityName.innerHTML = response.name;
            minTemp.innerHTML = (response.main.temp_min - 273.15).toFixed(2);
            maxTemp.innerHTML = (response.main.temp_max - 273.15).toFixed(2);
            cloudInfo.innerHTML = response.weather[0].main;
            let Cloudicon = response.weather[0].icon
            cloudImage.src = 'https://openweathermap.org/img/wn/' + `${Cloudicon}` + '.png';
            container.style.display = 'block';
        })
        .catch(function () {
            console.log('Oyyyy Oyyyy: there is an error');
        })

}

function getWeather() {
    let city = document.getElementById('city').value;
    weatherData(city);
}

function changeScale(e) {
    if (e === 'fas fa-toggle-off') {
        toggelBtn.className = 'fas fa-toggle-on';
        toggelBtn.innerHTML = 'Celcius';
        fahrenheitScale()
    } else {
        toggelBtn.className = 'fas fa-toggle-off';
        toggelBtn.innerHTML = 'Fahrenheit';
        celciusScale();
    }
}

function fahrenheitScale() {
    let temp = cityTemp.innerHTML;
    let min = minTemp.innerHTML;
    let max = maxTemp.innerHTML;
    cityTemp.innerHTML = ((temp * 9 / 5) + 32).toFixed(2);
    minTemp.innerHTML = ((min * 9 / 5) + 32).toFixed(2);
    maxTemp.innerHTML = ((max * 9 / 5) + 32).toFixed(2);
}

function celciusScale() {
    let temp = cityTemp.innerHTML;
    let min = minTemp.innerHTML;
    let max = maxTemp.innerHTML;
    cityTemp.innerHTML = ((temp - 32) * 5 / 9).toFixed(2);
    minTemp.innerHTML = ((min - 32) * 5 / 9).toFixed(2);
    maxTemp.innerHTML = ((max - 32) * 5 / 9).toFixed(2);
}

var cityName = document.getElementById('cityName');
var cityTemp = document.getElementById('cityTemp');
var minTemp = document.getElementById('minTemp');
var maxTemp = document.getElementById('maxTemp');
var cloudInfo = document.getElementById('cloudInfo');
var container = document.getElementById('container');
container.style.display = 'none';
var cloudImage = document.getElementById('cloudImage');
var toggelBtn = document.getElementById('toggelBtn');
