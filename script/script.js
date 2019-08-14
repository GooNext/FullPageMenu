let btn = document.querySelector(".btn");
let menu = document.querySelector(".main_menu");
let header = document.querySelector(".header")
let exit = document.querySelector(".exit")


btn.addEventListener("click", function(){
	this.classList.add("circle_active")
	header.style.transform = 'scale(0.7,0.7)'
	menu.style.top = '0'
})
exit.addEventListener("click", function(){
	btn.classList.remove("circle_active")
	menu.style.top = '-105vh'
	header.style.transform = 'scale(1,1)'
})