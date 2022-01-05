const button = document.querySelector('.navbar-toggler-icon');
const navActive = document.querySelector('.navbar-new-toggler');



button.addEventListener('click', () => {
    button.classList.add('active-none');
    navActive.classList.remove('active-none')
})
navActive.addEventListener('click', () => {
    button.classList.remove('active-none');
    navActive.classList.add('active-none')
})


