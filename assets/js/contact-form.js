'use strict';

(() => {
    document.getElementById('contactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        document.getElementById('modal').classList.add('active');
        e.target.reset();
    });
    document.getElementById('modalClose').addEventListener('click', () => {
        document.getElementById('modal').classList.remove('active');
    });
    document.getElementById('modal').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) e.currentTarget.classList.remove('active');
    });


    document.querySelector('[data-close-modal]').addEventListener('click', () => document.getElementById('modal').classList.remove('active'));
})();
