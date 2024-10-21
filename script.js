document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const firstnameError = document.getElementById('firstnameError');
    const lastnameError = document.getElementById('lastnameError');
    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const signupError = document.getElementById('signupError');

    // Reset error messages
    usernameError.style.display = 'none';
    emailError.style.display = 'none';
    passwordError.style.display = 'none';
    confirmPasswordError.style.display = 'none';
    signupError.style.display = 'none';

    // firstname validation
    if (firstname === '') {
        firstnameError.style.display = 'block';
        firstnameError.textContent = 'firstname is required.';
        return;
    }

    // lastname validation
    if (lastname === '') {
        lastnameError.style.display = 'block';
        lastnameError.textContent = 'lastname is required.';
        return;
    }

    // username validation
    if (username === '') {
        usernameError.style.display = 'block';
        usernameError.textContent = 'Username is required.';
        return;
    }

    // Email validation
    if (!validateEmail(email)) {
        emailError.style.display = 'block';
        emailError.textContent = 'Enter a valid email address.';
        return;
    }

    // Password validation (at least 6 characters)
    if (password.length < 6) {
        passwordError.style.display = 'block';
        passwordError.textContent = 'Password must be at least 6 characters long.';
        return;
    }

    // Confirm password validation
    if (password !== confirmPassword) {
        confirmPasswordError.style.display = 'block';
        confirmPasswordError.textContent = 'Passwords do not match.';
        return;
    }

    // If all validations pass, show success message
    alert('Sign Up successful!');
});

// Password strength checker
document.getElementById('password').addEventListener('input', function () {
    const password = document.getElementById('password').value;
    const passwordStrength = document.getElementById('passwordStrength');

    if (password.length < 6) {
        passwordStrength.textContent = 'Password must be at least 6 characters.';
        passwordStrength.className = 'strength weak';
    } else if (password.length >= 6 && password.length < 8) {
        passwordStrength.textContent = 'Weak';
        passwordStrength.className = 'strength weak';
    } else if (password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password)) {
        passwordStrength.textContent = 'Medium';
        passwordStrength.className = 'strength medium';
    } else if (password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password) && /[\W_]/.test(password)) {
        passwordStrength.textContent = 'Strong';
        passwordStrength.className = 'strength strong';
    } else if (password.length >= 12 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password) && /[\W_]/.test(password)) {
        passwordStrength.textContent = 'Very Strong';
        passwordStrength.className = 'strength very-strong';
    }
});

// Email format validation
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

document.addEventListener('DOMContentLoaded', function () {
    const bookingForm = document.querySelector('#booking-form');
    const modal = document.querySelector('#booking-modal'); // Ensure the modal is selected correctly
    const modalMessage = document.querySelector('.modal-message');
    const closeModalButton = document.querySelector('.close-modal');

    bookingForm.addEventListener('submit', function (event) {
        // Prevent form submission
        event.preventDefault();

        // Get form values
        const dateValue = document.querySelector('#date').value;
        const timeValue = document.querySelector('#time').value;

        // Set the modal message
        modalMessage.textContent = `Your video call session has been booked for ${dateValue} at ${timeValue}.`;

        // Display the modal
        modal.style.display = 'block';
    });

    // Close modal logic
    closeModalButton.addEventListener('click', function () {
        modal.style.display = 'none';
        bookingForm.reset();
    });

    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});