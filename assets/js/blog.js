(function () {
    'use strict';
    var tocList = document.querySelector('.blog-toc-list');
    var content = document.querySelector('.blog-content');
    if (!tocList || !content) return;
    var headings = Array.from(content.querySelectorAll('h1, h2, h3'));
    var toc = document.getElementById('blog-toc');
    if (!headings.length) {
        toc.hidden = true;
        return;
    }
    headings.forEach(function (heading, i) {
        if (!heading.id) heading.id = 'heading-' + i;
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.href = '#' + heading.id;
        a.textContent = heading.textContent;
        a.className = 'toc-' + heading.tagName.toLowerCase();
        li.appendChild(a);
        tocList.appendChild(li);
    });
    var links = Array.from(tocList.querySelectorAll('a'));
    function updateActive() {
        var current = headings[0];
        headings.forEach(function (heading) {
            if (heading.getBoundingClientRect().top <= 12) current = heading;
        });
        links.forEach(function (link) {
            var active = link.getAttribute('href') === '#' + current.id;
            link.classList.toggle('toc-active', active);
            if (active) link.setAttribute('aria-current', 'location');
            else link.removeAttribute('aria-current');
        });
    }
    var scheduled = false;
    window.addEventListener('scroll', function () {
        if (scheduled) return;
        scheduled = true;
        requestAnimationFrame(function () { updateActive(); scheduled = false; });
    }, { passive: true });
    window.addEventListener('resize', updateActive);
    updateActive();
}());
