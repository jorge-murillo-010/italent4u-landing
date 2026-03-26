console.log("loaded");
// footer //
const currentYear = new Date().getFullYear();
const yearElem = document.getElementById("currentyear");
if (yearElem) yearElem.innerHTML = currentYear;

const lastModified = document.lastModified;
const modifiedElem = document.getElementById("lastModified");
if (modifiedElem) modifiedElem.innerHTML = "Last Modified: " + lastModified;

// header //
const mainnav = document.querySelector('.navbar');
const hambutton = document.querySelector('#menu');

if (mainnav && hambutton) {
    hambutton.addEventListener('click', () => {
        mainnav.classList.toggle('open');
        hambutton.classList.toggle('open');
    });
}