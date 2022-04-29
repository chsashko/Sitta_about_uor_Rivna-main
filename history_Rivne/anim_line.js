const circle = document.querySelector(".circle_years");
window.addEventListener('scroll', function(){
    console.log(circle.offsetTop + Number(window.srollY));
})