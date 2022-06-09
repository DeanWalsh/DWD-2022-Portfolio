let burger = document.getElementById('burger');
const nav = document.getElementById('links');
const socials = document.getElementById('socials');

burger.addEventListener('click', () => {
    nav.classList.add('nav-open'), nav.classList.add('animate__slideInRight');
    socials.classList.add('socials-open'), socials.classList.add('animate__slideInRight');
    setTimeout(() => {
    burger.id = 'close';
    }, 100);
});




document.addEventListener('click', (e) => {
    if ((nav.classList.contains('nav-open')) && 
        (e.target.tagname === 'links a' || e.target.tagname === 'socials a') ||
        (e.target.id !== 'burger' && e.target.id !== 'links') || 
        (e.target.id === 'close')) {

            nav.classList.add('animate__slideOutRight');
            socials.classList.add('animate__slideOutRight');
            setTimeout(() => {
            burger.id = 'burger';
            }, 100);
        setTimeout(() => {
            nav.classList.remove('nav-open');
            socials.classList.remove('socials-open');
            nav.classList.remove('animate__slideOutRight');
            socials.classList.remove('animate__slideOutRight');
        }, 1500);
    }
});