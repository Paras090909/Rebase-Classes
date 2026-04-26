const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const signUpMobile = document.getElementById('signUpMobile');
const signInMobile = document.getElementById('signInMobile');

// Desktop overlay toggles
if (signUpButton) {
    signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
    });
}

if (signInButton) {
    signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
    });
}

// Mobile text link toggles
if (signUpMobile) {
    signUpMobile.addEventListener('click', (e) => {
        e.preventDefault();
        container.classList.add("right-panel-active");
    });
}

if (signInMobile) {
    signInMobile.addEventListener('click', (e) => {
        e.preventDefault();
        container.classList.remove("right-panel-active");
    });
}

// Form submission prevention (for demo purposes)
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically handle authentication
        const btn = form.querySelector('.primary-btn');
        const originalText = btn.innerText;
        btn.innerText = 'Processing...';
        btn.style.opacity = '0.8';
        
        setTimeout(() => {
            btn.innerText = 'Success!';
            btn.style.background = 'linear-gradient(90deg, #00b09b, #96c93d)';
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.background = '';
                btn.style.opacity = '1';
                form.reset();
            }, 2000);
        }, 1500);
    });
});
