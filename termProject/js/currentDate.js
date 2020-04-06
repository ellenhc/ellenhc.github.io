let currentTime = new Date();

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; //Use an array to display the name of the weekday
let currentWeekday = days[currentTime.getDay()]; //Returns the weekday of a date

let currentHour = currentTime.getHours();
if (currentHour > 12) {
    currentHour -= 12;
} else if (currentHour == 0) {
    currentHour = 12;
}

let currentMinutes = currentTime.getMinutes();
if (currentMinutes < 10) {
    currentMinutes = "0" + currentMinutes;
}

if (currentTime.getHours() >= 12) {
    document.getElementById("currentWeekdayId").innerHTML = currentWeekday + " " + currentHour + ":" + currentMinutes + " PM";
} else {
    document.getElementById("currentWeekdayId").innerHTML = currentWeekday + " " + currentHour + ":" + currentMinutes + " AM";
}