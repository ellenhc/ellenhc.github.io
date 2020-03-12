//Supplies the dates for five day forecast
let currentDay = new Date();
let currentDayNumber = currentDay.getDay();
let endDay = currentDayNumber + 5;
for (i = currentDayNumber; i < endDay; i++) {
    let nextDayNumber = i % 7;
    let nextDay = days[nextDayNumber];
    let j = i - currentDayNumber;
    let x = document.getElementsByClassName("dayClass");
    x[j].innerHTML = nextDay;
}

/*const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=de0b9a3291e852137733bf4abab06ac0&units=imperial";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //document.getElementById('current-temp').textContent = jsObject.main.temp;
        //const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
        //const desc = jsObject.weather[0].description; // note how we reference the weather array
        //document.getElementById('imagesrc').textContent = imagesrc; // informational specification only
        //document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method
        //document.getElementById('icon').setAttribute('alt', desc);
    });*/