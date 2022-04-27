const circle = document.querySelector(".circle_years");
const change_position = circle.clientTop

window.addEventListener("scroll", function(){
    console.log(change_position = change_position + window.scrollY);
})