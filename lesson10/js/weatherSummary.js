const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=de0b9a3291e852137733bf4abab06ac0&units=imperial";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        document.getElementById('currentlyId').textContent = jsObject.weather[0].description;
        document.getElementById('highTempId').textContent = jsObject.main.temp_max;
        document.getElementById('humidityId').textContent = jsObject.main.humidity;
        document.getElementById('windSpeedId').textContent = jsObject.wind.speed;
        document.getElementById('windChillId').textContent = getWindChill();
    });

function getWindChill() {
    let tString = document.getElementById("highTempId").innerHTML;
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