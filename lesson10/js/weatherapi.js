const apiURL = "api.openweathermap.org/data/2.5/weather?id=5604473&appid=de0b9a3291e852137733bf4abab06ac0&units=imperial"
    //&units=imperial&appid=de0b9a3291e852137733bf4abab06ac0";
    //APPID=de0b9a3291e852137733bf4abab06ac0
    //api.openweathermap.org/data/2.5/weather?id={city id}&appid={your api key}
    //Preston city Id = 5604473
    //&units=imperial

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
    });