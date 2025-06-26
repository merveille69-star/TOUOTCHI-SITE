// Menu burger (simple simulation)
const nav = document.querySelector('nav');
const toggle = document.createElement('button');
toggle.textContent = 'Menu';
document.querySelector('header').prepend(toggle);
toggle.onclick = () => nav.classList.toggle('open');

// Scroll animé (smooth)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});