document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Adicione isso ao seu arquivo JavaScript (script.js)
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
