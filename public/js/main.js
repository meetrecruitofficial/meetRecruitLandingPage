const toggleMenu = document.getElementsByClassName('menu');
const toggleLinks = document.getElementsByClassName('links');


if(toggleMenu){
    toggleMenu.addEventListener('click', () => {
        toggleLinks.classList.add('active')
        // console.log("rad")
    })
}