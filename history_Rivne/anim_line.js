const circle = document.querySelector(".circle_years");
const year = document.querySelector(".year");
window.addEventListener('scroll', function(){
    if(window.scrollY){
        circle.style.transform = `translateY(` + window.scrollY + `px` + `)`;

    }
    if(this.window.scrollY <= 420){
        year.innerHTML = "1914-1918"; 
    }
    if(this.window.scrollY >= 420){
        year.innerHTML = "1939-1945";     
    }
})