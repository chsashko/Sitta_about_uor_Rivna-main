const circle = document.querySelector(".circle_years");
const year = document.querySelector(".year");
window.addEventListener('scroll', function(){
    if(window.scrollY){
        circle.style.transform = `translateY(` + window.scrollY + `px` + `)`;
    }
    if(this.window.scrollY == 100){

    } 
})