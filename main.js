// JS FÜR IT SERVICES MEYER (digital-craftsman.com)
// Leichtgewichtiges Vanilla JS für UI Interaktionen.

document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. Mobile Menu Toggle --- */
    const mobileToggle = document.getElementById('mobile-toggle');
    const mainNav = document.getElementById('main-nav');
    
    mobileToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        // Kleine Animation für das Hamburger-Icon 
        const bars = mobileToggle.querySelectorAll('.bar');
        if(mainNav.classList.contains('active')){
            bars[0].style.transform = 'translateY(8px) rotate(45deg)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'translateY(-8px) rotate(-45deg)';
        } else {
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        }
    });

    // Close mobile menu when a link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('active')) {
                mobileToggle.click(); // Trigger click to reverse animation
            }
        });
    });

    /* --- 2. Sticky Header on Scroll --- */
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    /* --- 3. Form Handling (Simulation) --- */
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Verhindert echten Seitenreload beim Absenden
            
            // Simulierter Ladezustand
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerText;
            submitBtn.innerText = 'Wird gesendet...';
            submitBtn.disabled = true;

            // Simuliere Netzwerk-Delay
            setTimeout(() => {
                formStatus.style.color = '#34d399'; // Erfolgs-Grün
                formStatus.innerText = 'Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet (Simulation).';
                contactForm.reset();
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
                
                // Meldung nach 5 Sekunden entfernen
                setTimeout(() => {
                    formStatus.innerText = '';
                }, 5000);
            }, 1000);
        });
    }
});
