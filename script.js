// Navbar background change on scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if(window.scrollY > 50) {
        header.style.background = '#1a1a1a';
    } else {
        header.style.background = 'transparent';
    }
});

// Form alert
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Merci ! Votre message a été envoyé.');
    form.reset();
});

// Animation au scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.3,
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
