const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5585010&appid=de0b9a3291e852137733bf4abab06ac0&units=imperial";
const apiForecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5585010&appid=de0b9a3291e852137733bf4abab06ac0&units=imperial";
const eventsURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        document.getElementById('currentlyId').textContent = jsObject.weather[0].description;
        document.getElementById('tempId').textContent = jsObject.main.temp;
        document.getElementById('humidityId').textContent = jsObject.main.humidity;
        document.getElementById('windSpeedId').textContent = jsObject.wind.speed;
        document.getElementById('windChillId').textContent = getWindChill();
    });

function getWindChill() {
    let tString = document.getElementById("tempId").innerHTML;
    let t = Number(tString);
    let sString = document.getElementById("windSpeedId").innerHTML;
    let s = Number(sString);
    if (t <= 50 && s > 3) {
        let windChill = 35.74 + (0.6215 * t) - (35.75 * (s ** 0.16)) + (0.4275 * t * (s ** 0.16));
        return Math.round(windChill);
    } else {
        return "N/A";
    }
}

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

//EVENTS
fetch(eventsURL)
    .then((response) => response.json())
    .then((jsObject3) => {
        const towns = jsObject3['towns'];
        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == "Fish Haven") {
                for (let j = 0; j < towns[i].events.length; j++) {
                    let eventList = document.createElement('div');
                    eventList.textContent = towns[i].events[j];
                    document.querySelector('div.eventDetails').appendChild(eventList);
                }
            }
        }
    });