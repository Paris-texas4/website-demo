const submitBtn = document.getElementById('submiBtn');
const region = document.getElementById('regionOptions');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordToo = document.getElementById('passwordRetype');
const form = document.getElementById('form');
const error = document.getElementById('errorMsg');
const select = document.getElementById('select');
const checkbox = document.getElementById('checkbox');
const body = document.getElementById('body');
const toggleDarkMode = document.getElementById('dark-mode');
const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com|googlemail\.com)$/;
const pwdPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{7,}$/;

let maxLength = 25
let minLength = 7;
let darkModeIsOn = false;

// DomContentLoaded prevents from running the script before the element is created 
document.addEventListener('DOMContentLoaded' , () => {
    if (toggleDarkMode) {
        toggleDarkMode.addEventListener('click' , () => {
            window.onload = darkModeTheme();
        });
    }
    else {
        console.log('toggleDarkMode does not exist')
    }
});

function darkModeTheme () {
    darkModeIsOn == true;
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    
}

if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

form.addEventListener('submit' , (e) => {
    if (!emailPattern.test(email.value)) {
        e.preventDefault();
        error.textContent = '"Please fill in the correct email"'
    }
});

form.addEventListener('submit' , (e) => {
    if (!pwdPattern.test(password.value) || !pwdPattern.test(passwordToo.value)) {
        e.preventDefault();
        error.textContent = ' "Password should at least contain 7 characters or more containing 1 uppercase character, 1 lowercase character, 1 symbol (!@#$%^&*)" '
    }
})

form.addEventListener('submit' , (e) => {
    if (password.value.length > maxLength || password.value.length < minLength) {
        e.preventDefault();
        error.textContent = ' "Password should be of 7-25 characters" '
    }
})

form.addEventListener('submit' , (e) => {
    if (passwordToo.value.length > maxLength || passwordToo.value.length < minLength) {
        e.preventDefault();
        error.textContent = ' "Password should be of 7-25 characters" '
    }
})

form.addEventListener('submit' , (e) => {
    if (!checkbox.checked) {
        e.preventDefault();
        error.textContent = ' "Fill in the checkbox" ';

    }

    if (password.value !== passwordToo.value) {
        e.preventDefault();
        error.textContent = ' "Passwords do not match" ';
    }
})

form.addEventListener('submit' , (e) => {
    if (password.value.trim() == "") {
        e.preventDefault();
        error.textContent = ' "Fill out the form" ';

    }

    if (passwordToo.value.trim() == "") {
        e.preventDefault();
        error.textContent = ' "Fill out the form" ';

    }


    if (email.value.trim() == "") {
        e.preventDefault();
        error.textContent = ' "Fill out the form" ';
    }
})





