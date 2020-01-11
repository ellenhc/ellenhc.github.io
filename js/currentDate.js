let currentDate = new Date();
let currentYear = currentDate.getFullYear();
document.getElementById("currentYearId").innerHTML = currentYear

let dateLastModified = document.lastModified;
document.getElementById("currentDate").innerHTML = dateLastModified;