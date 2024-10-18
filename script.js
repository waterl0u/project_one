document.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const aside = document.querySelector('.aside');
    const mainBody = document.querySelector('.main_body');

    if (window.scrollY > 100) {
        header.style.transform = 'translateX(-100%)'; // Animate header to left
        aside.style.display = 'block'; // Show aside
        mainBody.style.opacity = '1';
    } else {
        header.style.transform = 'translateX(0)'; // Reset header position
        aside.style.display = 'none'; // Hide aside
        mainBody.style.opacity = '0.3';
    }
});
