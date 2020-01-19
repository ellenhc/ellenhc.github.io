let currentDate = new Date(); // get current date
let currentYear = currentDate.getFullYear();
document.getElementById("currentYearId").innerHTML = currentYear

let dateLastModified = document.lastModified;
document.getElementById("dateModified").innerHTML = dateLastModified;
