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


// About Us Dropdown
document.addEventListener('DOMContentLoaded', function() {
  const dropdown = document.querySelector('.dropdown');
  const dropbtn = document.getElementById('about-btn');

  if (!dropdown || !dropbtn) {
    console.error("Dropdown elements not found! Check your HTML classes/IDs.");
    return;
  }

  dropbtn.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
    dropdown.classList.toggle('active');
  });

  // Close when clicking outside
  document.addEventListener('click', function(e) {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('active');
    }
  });

  // Close after clicking a link inside menu
  const menuLinks = dropdown.querySelectorAll('.dropdown-content a');
  menuLinks.forEach(link => {
    link.addEventListener('click', function() {
      dropdown.classList.remove('active');
    });
  });
});


