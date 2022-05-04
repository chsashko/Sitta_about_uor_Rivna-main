const circle = document.querySelector(".circle_years");
window.addEventListener('scroll', function(){
    if(window.scrollY){
        circle.style.transform = `translateY(` + window.scrollY + `px` + `)`;
    }
    
})