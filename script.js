// Smooth scroll for links
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Hire Me button click alert
const hireBtn = document.querySelector('.btn');

hireBtn.addEventListener('click', () => {
    alert("You're about to contact Efemena 🚀");
});
