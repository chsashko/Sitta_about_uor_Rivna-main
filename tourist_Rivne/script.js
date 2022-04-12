const fort_anim = document.querySelector(".fort");
const fort_info_anim = document.querySelector(".fort-info")
const fort_title_anim = document.querySelector(".fort-title")

function anim() {
	fort_anim.classList.add("-active")
	fort_info_anim.classList.add("-active")
	fort_title_anim.classList.add("-active")
}

setTimeout(anim, 1)