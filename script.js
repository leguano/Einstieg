document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('nav > ul > li > span.toggle').forEach(span => {
        span.addEventListener('click', () => {
            span.parentElement.classList.toggle('open');
        });
    });
});
