
//get elements
const btn = document.getElementById('btn');
const nav = document.getElementById('nav');

//add event listener
btn.addEventListener('click', () => {
    nav.classList.toggle('active');
    btn.classList.toggle('active');
});