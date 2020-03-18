//Supplies the dates for five day forecast
let currentDay = new Date();
let currentDayNumber = currentDay.getDay() + 1;
let endDay = currentDayNumber + 5;
for (i = currentDayNumber; i < endDay; i++) {
    let nextDayNumber = i % 7;
    let nextDay = days[nextDayNumber];
    let j = i - currentDayNumber;
    let x = document.getElementsByClassName("dayClass");
    x[j].innerHTML = nextDay;
}

const apiForecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5585010&appid=de0b9a3291e852137733bf4abab06ac0&units=imperial";

fetch(apiForecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
        const fiveDayForecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        for (let i = 0; i < fiveDayForecast.length; i++) {
            document.getElementById(`temp${i+1}`).textContent = fiveDayForecast[i].main.temp;
            const iconName = fiveDayForecast[i].weather[0].icon;
            const iconsrc = `https://openweathermap.org/img/w/${iconName}.png`;
            const altText = fiveDayForecast[i].weather[0].description;
            document.getElementById(`icon-${i+1}`).setAttribute('src', iconsrc);
            document.getElementById(`icon-${i+1}`).setAttribute('alt', altText)
        }
    });