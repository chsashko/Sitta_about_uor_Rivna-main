const fort_anim = document.querySelector(".fort");
const fort_info_anim = document.querySelector(".fort-info");
const fort_title_anim = document.querySelector(".fort-title");

const zal_anim = document.querySelector(".zal");
const zal_info_anim = document.querySelector(".zal-info");
const zal_title_anim = document.querySelector(".zal-title");

const bunker_anim = document.querySelector(".bunker");
const bunker_info_anim = document.querySelector(".bunker-info");
const bunker_title_anim = document.querySelector(".bunker-title");

const height = fort_anim.height;
fort_anim.classList.add("-active");
fort_info_anim.classList.add("-active")
fort_title_anim.classList.add("-active");
function anim() {
	console.log(window);

}
window.addEventListener("scroll", function(){
	console.log(bunker_anim);
	if(window.scrollY >= 350){
		zal_anim.classList.add("-active");
		zal_info_anim.classList.add("-active")
		zal_title_anim.classList.add("-active");
	}
	if(window.scrollY >= 1000){
		bunker_anim.classList.add("-active");
		bunker_info_anim.classList.add("-active")
		bunker_title_anim.classList.add("-active");
	}
})
setTimeout(anim, 1)