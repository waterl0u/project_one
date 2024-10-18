const animatedBoxes = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.5 });

animatedBoxes.forEach((box) => observer.observe(box));