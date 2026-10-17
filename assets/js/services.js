'use strict';

(() => {
    function toggleService(btn) {
        const card = btn.closest('.service-card');
        const full = card.querySelector('.service-full');
        const expanded = card.classList.toggle('expanded');
        full.classList.toggle('expanded', expanded);
        const language = document.documentElement.lang;
        const labels = language === 'zh-CN'
            ? ['了解详情', '收起']
            : language === 'en' ? ['Learn More', 'Show Less'] : ['Подробнее', 'Свернуть'];
        btn.querySelector('span').textContent = labels[expanded ? 1 : 0];
        btn.setAttribute('aria-expanded', String(expanded));
    }


    document.querySelectorAll('.service-toggle').forEach(button => {
        button.setAttribute('aria-expanded', 'false');
        button.addEventListener('click', () => toggleService(button));
    });
})();
