const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5606338&appid=de0b9a3291e852137733bf4abab06ac0&units=imperial";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        document.getElementById('currentlyId').textContent = jsObject.weather[0].main;
        document.getElementById('tempId').textContent = Math.round(jsObject.main.temp);
        document.getElementById('humidityId').textContent = jsObject.main.humidity;
        document.getElementById('windSpeedId').textContent = Math.round(jsObject.wind.speed);
        //document.getElementById('windChillId').textContent = getWindChill();
        const iconName = jsObject.weather[0].icon;
        const iconsrc = `https://openweathermap.org/img/w/${iconName}.png`;
        const altText = jsObject.weather[0].description;
        document.getElementById('icon').setAttribute('src', iconsrc);
        document.getElementById('icon').setAttribute('alt', altText);
    });

/*function getWindChill() {
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
}*/