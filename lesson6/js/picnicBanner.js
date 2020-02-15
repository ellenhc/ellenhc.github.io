//Displays banner if it's Friday
if (currentDayNumber == 5) {
    let text = "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.";
    document.getElementById("banner").innerHTML = text;
    document.getElementById("banner").style.backgroundColor = "#FFD82D";
    document.getElementById("banner").style.textAlign = "center";
    document.getElementById("banner").style.padding = "0.75em";
}