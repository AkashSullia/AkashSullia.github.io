const btn = document.getElementById('cta-btn');
const overlay = document.getElementById('overlay');
btn.addEventListener('click', () => {
    overlay.style.display = 'grid';
    overlay.classList.add('animate-overlay');
});
