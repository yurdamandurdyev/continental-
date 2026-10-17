'use strict';

(() => {
    function toggleService(btn) {
        const card = btn.closest('.service-card');
        const full = card.querySelector('.service-full');
        const expanded = card.classList.toggle('expanded');
        full.classList.toggle('expanded', expanded);
        const isChinese = document.documentElement.lang === 'zh-CN';
        btn.querySelector('span').textContent = isChinese ? (expanded ? '收起' : '了解详情') : (expanded ? 'Свернуть' : 'Подробнее');
        btn.setAttribute('aria-expanded', String(expanded));
    }


    document.querySelectorAll('.service-toggle').forEach(button => {
        button.setAttribute('aria-expanded', 'false');
        button.addEventListener('click', () => toggleService(button));
    });
})();
