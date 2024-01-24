window.addEventListener("scroll",function(){
	let header = document.querySelector('header');
	header.classList.toggle("menu-fixed",window.scrollY>0);
}
);
