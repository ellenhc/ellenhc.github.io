//Footer must display the current date using JavaScript in this format: Wednesday, 24 July 2020

let currentTime = new Date();

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; //Use an array to display the name of the weekday
let currentWeekday = days[currentTime.getDay()]; //Returns the weekday of a date

let currentDate = currentTime.getDate(); //Returns the day of a date as a number

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; //Use an array to display the name of the month
let currentMonth = months[currentTime.getMonth()]; //Returns the month of a date as a number

let currentYear = currentTime.getFullYear(); //Returns the year of a date as a four digit number

//Shows current year next to copyright symbol in footer
document.getElementById("currentYearId").innerHTML = currentYear;

//Shows today's date in footer
document.getElementById("currentTimeId").innerHTML = currentWeekday + ", " + currentDate + " " + currentMonth + " " + currentYear;