console.log("loaded");
// footer //
const currentYear = new Date().getFullYear();
const yearElem = document.getElementById("currentyear");
if (yearElem) yearElem.innerHTML = currentYear;

const lastModified = document.lastModified;
const modifiedElem = document.getElementById("lastModified");
if (modifiedElem) modifiedElem.innerHTML = "Last Modified: " + lastModified;

// header //
var hamburger = document.getElementById('hamburger');
var mainNav = document.getElementById('mainNav');
var aboutBtn = document.getElementById('aboutBtn');
var dropdownMenu = document.getElementById('dropdownMenu');

hamburger.addEventListener('click', function(e) {
  e.stopPropagation();
  hamburger.classList.toggle('active');
  mainNav.classList.toggle('open');
});

aboutBtn.addEventListener('click', function(e) {
  e.stopPropagation();
  aboutBtn.classList.toggle('open');
  dropdownMenu.classList.toggle('show');
});

document.addEventListener('click', function(e) {
  if (!document.getElementById('aboutWrap').contains(e.target)) {
    aboutBtn.classList.remove('open');
    dropdownMenu.classList.remove('show');
  }
  if (!mainNav.contains(e.target) && !hamburger.contains(e.target)) {
    mainNav.classList.remove('open');
    hamburger.classList.remove('active');
  }
});

// footer dropdown //
var footerAboutBtn = document.getElementById('footerAboutBtn');
var footerDropdownMenu = document.getElementById('footerDropdownMenu');

if (footerAboutBtn && footerDropdownMenu) {
  footerAboutBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    footerAboutBtn.classList.toggle('open');
    footerDropdownMenu.classList.toggle('show');
  });

  document.addEventListener('click', function(e) {
    if (!document.getElementById('footerAboutWrap').contains(e.target)) {
      footerAboutBtn.classList.remove('open');
      footerDropdownMenu.classList.remove('show');
    }
  });
}

// FORMS //
const toggleBtns = document.querySelectorAll('.toggle-btn');
const formContainers = document.querySelectorAll('.form-container');

toggleBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    const formType = this.getAttribute('data-form');
    
    // Remove active class from all buttons and forms
    toggleBtns.forEach(b => b.classList.remove('active'));
    formContainers.forEach(form => form.classList.remove('active'));
    
    // Add active class to clicked button and corresponding form
    this.classList.add('active');
    const targetFormId = formType === 'contact' && document.getElementById('footerContactForm')
      ? 'footerContactForm'
      : formType + 'Form';
    const targetForm = document.getElementById(targetFormId);
    if (targetForm) {
      targetForm.classList.add('active');
    }
  });
});

const contactNavLink = document.querySelector('a[href="#footerForms"]');
const footerFormsSection = document.getElementById('footerForms');

if (contactNavLink && footerFormsSection) {
  contactNavLink.addEventListener('click', function(e) {
    e.preventDefault();

    toggleBtns.forEach(b => b.classList.remove('active'));
    formContainers.forEach(form => form.classList.remove('active'));

    const contactBtn = document.querySelector('.toggle-btn[data-form="contact"]');
    const contactForm = document.getElementById('footerContactForm');

    if (contactBtn) contactBtn.classList.add('active');
    if (contactForm) contactForm.classList.add('active');

    footerFormsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

// Form submission handlers
document.getElementById('newsletterForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('nl-name').value.trim();
  const email = document.getElementById('nl-email').value.trim();
  const messageEl = document.getElementById('nl-message');
  
  if (!name || !email) {
    messageEl.classList.remove('success');
    messageEl.classList.add('error');
    messageEl.textContent = 'Please fill in all fields.';
    return;
  }
  
  // If using Formspree, this would work automatically
  // For now, show success message
  messageEl.classList.remove('error');
  messageEl.classList.add('success');
  messageEl.textContent = 'Thank you for subscribing!';
  
  // Reset form
  this.reset();
  
  // Clear message after 3 seconds
  setTimeout(() => {
    messageEl.textContent = '';
    messageEl.classList.remove('success', 'error');
  }, 3000);
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('c-name').value.trim();
  const email = document.getElementById('c-email').value.trim();
  const phone = document.getElementById('c-phone').value.trim();
  const company = document.getElementById('c-company').value.trim();
  const message = document.getElementById('c-message').value.trim();
  const messageEl = document.getElementById('c-message-status');
  
  if (!name || !email || !phone || !company || !message) {
    messageEl.classList.remove('success');
    messageEl.classList.add('error');
    messageEl.textContent = 'Please fill in all fields.';
    return;
  }
  
  // If using Formspree, this would work automatically
  // For now, show success message
  messageEl.classList.remove('error');
  messageEl.classList.add('success');
  messageEl.textContent = 'Thank you! We will contact you soon.';
  
  // Reset form
  this.reset();
  
  // Clear message after 3 seconds
  setTimeout(() => {
    messageEl.textContent = '';
    messageEl.classList.remove('success', 'error');
  }, 3000);
});

// Footer Contact Form Handler
var footerContactForm = document.getElementById('footerContactForm');
if (footerContactForm) {
  footerContactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('f-name').value.trim();
    const email = document.getElementById('f-email').value.trim();
    const phone = document.getElementById('f-phone').value.trim();
    const company = document.getElementById('f-company').value.trim();
    const message = document.getElementById('f-message').value.trim();
    const messageEl = document.getElementById('f-message-status');
    
    if (!name || !email || !phone || !company || !message) {
      messageEl.classList.remove('success');
      messageEl.classList.add('error');
      messageEl.textContent = 'Please fill in all fields.';
      return;
    }
    
    // If using Formspree, this would work automatically
    // For now, show success message
    messageEl.classList.remove('error');
    messageEl.classList.add('success');
    messageEl.textContent = 'Thank you! We will contact you soon.';
    
    // Reset form
    this.reset();
    
    // Clear message after 3 seconds
    setTimeout(() => {
      messageEl.textContent = '';
      messageEl.classList.remove('success', 'error');
    }, 3000);
  });
}

