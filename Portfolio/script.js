document.addEventListener('DOMContentLoaded', function() {
  var contactBox = document.getElementById('contact-info-box');
  var navItems = document.querySelectorAll('.nav li');

  navItems.forEach(function(item) {
    item.addEventListener('click', function() {
      navItems.forEach(function(i) { i.classList.remove('active'); });
      item.classList.add('active');
      if (item.textContent.trim().toLowerCase() === 'contact') {
        contactBox.classList.toggle('show');
      } else {
        contactBox.classList.remove('show');
      }
    });
  });

  const certToggle = document.getElementById('certifications-toggle');
  const certList = document.getElementById('certifications-list');
  if (certToggle && certList) {
    certToggle.addEventListener('click', function() {
      certList.classList.toggle('show');
    });
  }

  const aboutMeToggle = document.getElementById('aboutme-toggle');
  const aboutMeSection = document.getElementById('aboutme-section');
  if (aboutMeToggle && aboutMeSection) {
    aboutMeToggle.addEventListener('click', function() {
      aboutMeSection.classList.toggle('show');
    });
    // Optional: allow keyboard accessibility
    aboutMeToggle.tabIndex = 0;
    aboutMeToggle.addEventListener('keypress', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        aboutMeSection.classList.toggle('show');
      }
    });
  }
});
