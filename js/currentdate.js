//gets current year for copyright
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
document.getElementById("currentYearId").innerHTML = currentYear

//last modified date
let dateLastModified = document.lastModified;
document.getElementById("dateModified").innerHTML = dateLastModified;