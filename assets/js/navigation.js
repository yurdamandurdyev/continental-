'use strict';

(() => {
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    const burger = document.getElementById('burger');
    const mobileNav = document.getElementById('mobileNav');
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        mobileNav.classList.toggle('active');
        burger.setAttribute('aria-expanded', String(mobileNav.classList.contains('active')));
    });
    mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('active');
            mobileNav.classList.remove('active');
            burger.setAttribute('aria-expanded', 'false');
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }
            const target = document.getElementById(href.slice(1));
            if (target) {
                e.preventDefault();
                const offset = header.getBoundingClientRect().height + 24;
                const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });
})();
