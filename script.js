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
    
// Lightbox pour les images
    const images = document.querySelectorAll('.zoomable');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('#lightbox .close');

    // Quand on clique sur l'image → ouvrir la popup
    images.forEach(img => {
        img.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            lightboxImg.src = img.src;
        });
    });

    // Fermer en cliquant sur la croix
    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    // Fermer en cliquant autour
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
    const projects = document.querySelectorAll('.project');

    function revealProjects() {
        const triggerBottom = window.innerHeight / 5 * 4;

        projects.forEach(project => {
            const projectTop = project.getBoundingClientRect().top;

            if (projectTop < triggerBottom) {
                project.classList.add('show');
            }
        });
    }

    window.addEventListener('scroll', revealProjects);
    window.addEventListener('load', revealProjects); // animation au chargement aussi
