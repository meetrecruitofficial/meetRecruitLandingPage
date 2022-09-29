const toggleMenu = document.getElementById('menus');
const toggleLinks = document.getElementById('link');
const toggleClose = document.getElementById('close');

if(toggleMenu){
    toggleMenu.addEventListener('click', () => {
        toggleLinks.classList.add('active')
        // console.log("rad")
    })
}

if(toggleClose){
    toggleClose.addEventListener('click', () => {
        toggleLinks.classList.remove('active')
    })
}