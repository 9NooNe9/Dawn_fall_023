function animatedForm() {
    const arrows = document.querySelectorAll(".fa-arrow-down");

    arrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            const errorMessage = document.querySelector(".message h2");
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;

            //      check for validation
            if (input.type === "text" && validateUser(input)) {
                nextSlide(parent, nextForm);
            } else if (input.type === "email" && validateEmail(input)) {
                nextSlide(parent, nextForm);
            } else if (input.type === "password" && validatePassword(input)) {
                nextSlide(parent, nextForm);
            }else {
                parent.style.animation = "shake 0.5s ease";
            }
        //    get rid off animation
            parent.addEventListener('animationend', () => {
               parent.style.animation = '';
            });
        });
    });
}

function validateUser(user) {
    if (user.value.length < 6) {
        error('rgb(189,87,87)', 'User name should have 6 character');
    } else {
        error('rgb(87,189,130)', 'Please enter your email address');
        return true;
    }
}

function validateEmail(email) {
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (validation.test(email.value)) {
        error('rgb(87,189,130)', 'Please enter your password');
        return true;
    } else {
        error('rgb(189,87,87)',  'This is not a valid email address');
    }
}

function validatePassword(password) {
    if (password.value.length < 8) {
        error('rgb(189,87,87)', 'Password should have 8 character');
    } else {
        error('rgb(87,189,130)', 'we are done!');
        return true;
    }
}

function nextSlide(parent, nextForm) {
    parent.classList.add("inactive");
    parent.classList.remove("active");
    nextForm.classList.add("active");
}

function error(backgroundColor, errorMessage) {
    document.body.style.backgroundColor = backgroundColor;
    document.querySelector('.message').textContent = errorMessage;
    if (backgroundColor === 'rgb(189,87,87)') {
        document.querySelector('i.far').classList.remove('fa-smile');
        document.querySelector('i.far').classList.add('fa-frown');
    }
    if (backgroundColor === 'rgb(87,189,130)') {
        document.querySelector('i.far').classList.remove('fa-frown');
        document.querySelector('i.far').classList.add('fa-smile');
    }
}


animatedForm();