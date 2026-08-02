let cleared = JSON.parse(localStorage.getItem("cleared"));
let hasInit = false;
let score = cleared.length;

if (!hasInit){
	localStorage.setItem("cleared", JSON.stringify([]));
}

cleared.forEach(level => {
	let stage = document.getElementById("lvl"+level);
	stage.style.boxShadow = "0px 0px 12px green"
	let stagename = stage.getElementsByClassName("name").item(0);
	stagename.style.color = "green";
	stagename.innerHTML = "<p>Level 1✅</p>"
});