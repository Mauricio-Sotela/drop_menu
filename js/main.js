document.querySelector(".bmenu").addEventListener("click",()=>{
	document.querySelector(".bmenu").classList.toggle("hover")
})

document.querySelector(".bmenu").addEventListener("click",()=>{
	document.querySelector(".main_menu").classList.toggle("active")
})

const comprobarAncho = () => {
	if(window.innerWidth >= 650){
        document.querySelector(".main_menu").classList.remove("active");
        document.querySelector(".bmenu").classList.remove("hover")
	} 
}

comprobarAncho();

window.addEventListener('resize', () => {
	comprobarAncho();
});

