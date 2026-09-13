(function () {
    'use strict';
    var header = document.querySelector('.aero-header');
    var menuButton = document.querySelector('[data-aero-menu]');
    var menu = document.getElementById('navbarResponsive');
    var yearLinks = Array.from(document.querySelectorAll('#navbar-year a[href^="#"]'));
    var years = yearLinks.map(function (link) {
        return { link: link, target: document.getElementById(link.hash.slice(1)) };
    }).filter(function (entry) { return entry.target; });

    function updateYear() {
        var current = years[0];
        years.forEach(function (entry) {
            if (entry.target.getBoundingClientRect().top <= 20) current = entry;
        });
        years.forEach(function (entry) {
            var active = entry === current;
            entry.link.classList.toggle('active', active);
            if (active) entry.link.setAttribute('aria-current', 'location');
            else entry.link.removeAttribute('aria-current');
        });
    }
    function closeMenu() {
        if (!menu || !menuButton) return;
        menu.classList.remove('show');
        menuButton.setAttribute('aria-expanded', 'false');
    }
    if (menuButton && menu) {
        menuButton.addEventListener('click', function () {
            var expanded = menu.classList.toggle('show');
            menuButton.setAttribute('aria-expanded', String(expanded));
        });
        header.addEventListener('keydown', function (event) {
            if (event.key === 'Escape' && menu.classList.contains('show')) {
                closeMenu();
                menuButton.focus();
            }
        });
        var desktop = window.matchMedia('(min-width: 768px)');
        desktop.addEventListener('change', closeMenu);
    }
    if (years.length) {
        updateYear();
        var scheduled = false;
        window.addEventListener('scroll', function () {
            if (scheduled) return;
            scheduled = true;
            requestAnimationFrame(function () { updateYear(); scheduled = false; });
        }, { passive: true });
        window.addEventListener('resize', updateYear);
    }
}());
