//f is the wind chill factor in Fahrenheit, t is the air average temperature in Fahrenheit, and s is the wind speed in miles per hour.

//Input requirements: "Wind Chill Temperature is officially defined for temperatures at or below 10 °C (50 °F) and wind speeds above 4.8 kph (3.0 mph)."

document.getElementById("windSpeedId").addEventListener("load", getWindChill);

function getWindChill(){
    let tString = document.getElementById("highTempId").value;
    let t = Number(tString);
    let sString = document.getElementById("windSpeedId").value;
    let s = Number(sString);
    if (t <= 50 && s < 3) {
        let windChill = 35.74 + (0.6215 * t) - (35.75 * (s ** 0.16)) + (0.4275 * t * (s ** 0.16));
        document.getElementById("windChillId").innerHTML = Math.round(windChill);
    }
    else {
        document.getElementById("windChillId").innerHTML = "N/A";
    }
}