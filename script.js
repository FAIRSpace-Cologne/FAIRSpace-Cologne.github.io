// ===== Hamburger Menu Toggle =====
(function () {
    if (document.querySelector('.announcement-bar')) {
        document.body.classList.add('has-announcement');
    }
})();

// ===== Hamburger Menu Toggle =====
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });
}

// Close menu & scroll when link clicked
navLinks.forEach(link => {
    link.addEventListener('click', e => {
        const href = link.getAttribute('href');

        // Close the menu first
        navMenu.classList.remove('active');
        document.body.classList.remove('menu-open');

        // Only handle smooth scrolling if we're on index.html AND clicking an anchor
        if (href.startsWith('#')) {
            // Pure anchor link (like #about) - only on same page
            e.preventDefault();
            const target = document.getElementById(href.substring(1));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 60,
                    behavior: 'smooth'
                });
            }
        }
        // For all other links (team.html, articles.html, index.html#about), let browser handle normally
    });
});

// Handle scrolling to section after page load (when coming from another page with #hash)
window.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash;
    if (hash) {
        // Small delay to ensure page is fully rendered
        setTimeout(() => {
            const target = document.getElementById(hash.substring(1));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 60,
                    behavior: 'smooth'
                });
            }
        }, 100);
    }
});

// ===== ANNOUNCEMENT ROTATOR =====
(function () {
    const announcements = [
        "Welcome to FAIRspace Cologne – tools and resources for FAIR data.",
        "Join our FAIR training workshops – next session: 12 Nov 2025.",
        "Check out our Dataverse integration guides and templates.",
        "Subscribe to our newsletter for updates."
    ];

    const el = document.querySelector('.announcement-text');
    const nextBtn = document.querySelector('.announce-next');
    const prevBtn = document.querySelector('.announce-prev');
    if (!el) return;

    let idx = 0;
    let autoTimer = null;
    const AUTO_DELAY = 5000;

    const show = (i) => {
        el.classList.add('fade-out');
        setTimeout(() => {
            el.textContent = announcements[i];
            el.classList.remove('fade-out');
        }, 320);
    };

    const startAuto = () => {
        clearAuto();
        autoTimer = setTimeout(() => {
            idx = (idx + 1) % announcements.length;
            show(idx);
            startAuto(); // schedule next
        }, AUTO_DELAY);
    };

    const clearAuto = () => {
        if (autoTimer) {
            clearTimeout(autoTimer);
            autoTimer = null;
        }
    };

    // start automatic rotation after load
    startAuto();

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            clearAuto();
            idx = (idx + 1) % announcements.length;
            show(idx);
            startAuto();
        });
    }
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            clearAuto();
            idx = (idx - 1 + announcements.length) % announcements.length;
            show(idx);
            startAuto();
        });
    }

    // optional: if user focuses or hovers announcement, pause auto-advance until they leave
    const wrapper = document.querySelector('.announcement-inner');
    if (wrapper) {
        wrapper.addEventListener('mouseenter', clearAuto);
        wrapper.addEventListener('mouseleave', startAuto);
        wrapper.addEventListener('focusin', clearAuto);
        wrapper.addEventListener('focusout', startAuto);
    }
})();