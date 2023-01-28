const toggleBtn = document.querySelector('.menu-toggle');
const primaryMenu = document.querySelector('header .menu');

toggleBtn.addEventListener('click', () => { 
    primaryMenu.classList.toggle('active');
    toggleBtn.classList.toggle('active');
});
