document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById('registrationForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let isValid = true;

    // Clear all error messages
    document.querySelectorAll('.error').forEach(function (el) {
      el.style.display = 'none';
    });

    // Remove red borders
    document.querySelectorAll('input, select, textarea').forEach(function (el) {
      el.classList.remove('invalid');
    });

    // Name Validation
    const name = document.getElementById('name');
    const nameRegex = /^[A-Za-z ]{3,}$/;
    if (!nameRegex.test(name.value)) {
      isValid = false;
      name.classList.add('invalid');
      const nameError = document.getElementById('nameError');
      nameError.textContent = "Enter a valid name (min 3 letters)";
      nameError.style.display = 'block';
    }

    // Email Validation
    const email = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
      isValid = false;
      email.classList.add('invalid');
      const emailError = document.getElementById('emailError');
      emailError.textContent = "Enter a valid email";
      emailError.style.display = 'block';
    }

    // Phone Validation
    const phone = document.getElementById('phone');
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone.value)) {
      isValid = false;
      phone.classList.add('invalid');
      const phoneError = document.getElementById('phoneError');
      phoneError.textContent = "Enter a valid 10-digit phone number";
      phoneError.style.display = 'block';
    }

    // Age Validation
    const age = document.getElementById('age');
    const ageValue = parseInt(age.value);
    const ageError = document.getElementById('ageError');

    if (isNaN(ageValue)) {
      isValid = false;
      age.classList.add('invalid');
      ageError.textContent = "Age is required";
      ageError.style.display = 'block';
    } else if (ageValue < 18) {
      isValid = false;
      age.classList.add('invalid');
      ageError.textContent = "Underage - Must be 18 or above";
      ageError.style.display = 'block';
    }

    // Gender Validation
    const genderSelected = document.querySelector('input[name="gender"]:checked');
    if (!genderSelected) {
      isValid = false;
      const genderError = document.getElementById('genderError');
      genderError.textContent = "Please select a gender";
      genderError.style.display = 'block';
    }

    // Event Type Validation
    const eventType = document.getElementById('eventType');
    if (eventType.value === "") {
      isValid = false;
      eventType.classList.add('invalid');
      const eventTypeError = document.getElementById('eventTypeError');
      eventTypeError.textContent = "Please select an event";
      eventTypeError.style.display = 'block';
    }

    // Final Submission
    if (isValid) {
      alert("Registration Successful!");
      form.reset();
    }
  });
});
