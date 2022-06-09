const burger = document.getElementById('burger');
const close = document.getElementById('close');
const nav = document.getElementById('links');
const socials = document.getElementById('socials');

burger.addEventListener('click', () => {
    if (nav.classList.contains('nav-open')) {} else {
        nav.classList.add('nav-open'),
            nav.classList.add('animate__slideInRight'),
            nav.classList.add('animate__animated');
        socials.classList.add('socials-open'),
            socials.classList.add('animate__slideInRight'),
            socials.classList.add('animate__animated');
        close.classList.add('close-open'),
            close.classList.add('animate__slideInRight'),
            close.classList.add('animate__animated');
    }
    document.addEventListener('click', (e) => {
        if (nav.classList.contains('nav-open') &&
            (e.target.tagname === 'links a' || e.target.tagname === 'socials a') ||
            (e.target.id !== 'burger' && e.target.id !== 'links') ||
            (e.target.id === 'close')) {

            nav.classList.add('animate__slideOutRight');
            socials.classList.add('animate__slideOutRight');
            close.classList.add('animate__slideOutRight');

            setTimeout(() => {
                close.classList.remove('animate__slideOutRight');
                close.classList.remove('animate__slideInRight');
                close.classList.remove('close-open');
                close.classList.remove('animate__animated');
                nav.classList.remove('nav-open');
                nav.classList.remove('animate__slideOutRight');
                nav.classList.remove('animate__slideInRight');
                nav.classList.remove('animate__animated');
                socials.classList.remove('socials-open');
                socials.classList.remove('animate__slideOutRight');
                socials.classList.remove('animate__slideInRight');
                socials.classList.remove('animate__animated');
            }, 600);
        }
    });
});

const year = document.getElementById('year');
year.innerHTML = new Date().getFullYear();