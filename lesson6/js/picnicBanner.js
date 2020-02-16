//Displays banner if it's Friday

let currentDate = new Date();
let currentWeekdayNumber = currentDate.getDay();

if (currentWeekdayNumber == 5) {
    document.getElementById("banner").style.backgroundColor = "#FFD82D";
    document.getElementById("banner").style.textAlign = "center";
    document.getElementById("banner").style.padding = "0.75em";
} else {
    document.getElementById("banner").style.display = "none";
}