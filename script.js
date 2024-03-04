//your JS code here. If required.
const search = document.querySelector(".search");
const button = document.querySelector(".btn");
const input = document.querySelector(".input");
button.addEventListener("click",()=>{
	input.focus();
	search.style.border="1px solid red";
})