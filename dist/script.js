//navbar-fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const toTop = document.querySelector('#to-top');
    const fixednav = header.offsetTop;
    if(window.pageYOffset > fixednav){
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.add('hidden');
        toTop.classList.remove('flex');
    }
};

//hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

window.addEventListener('click', function(e){
    if(e.target != navMenu && e.target != hamburger){
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
})

//Dark Mode
const darkToggle = document.getElementById('dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function(){
    if(darkToggle.checked){
        html.classList.add('dark'); 
        localStorage.theme = 'dark'; 
    } else{
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true
} else {
    darkToggle.checked = false
}