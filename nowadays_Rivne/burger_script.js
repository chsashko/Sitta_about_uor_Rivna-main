let menu  = document.querySelector('.burger-menu');

let links = document.querySelector('.burger-menu_link');
let overlay = document.querySelector('burger-menu_overlay');
let button = document.querySelector('.burger-menu_button');
button.addEventListener('click',(e)=>{
    e.preventDefault();
    toggleMenu();
} )

function toggleMenu(){
    menu.classList.toggle('burger-menu_active');
    if (menu.classList.contains('burger-menu_active')){
        document.querySelector('body').css('overflow', 'hidden')
    }
    else{
        document.querySelector('body').css('overflow', 'visible')
    }
}
