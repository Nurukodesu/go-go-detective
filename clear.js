let hasInit = false;
let cleared = JSON.parse(localStorage.getItem("cleared"));

if (cleared == null){
	localStorage.setItem("cleared", JSON.stringify([]));
}

let score = cleared.length;

cleared.forEach(level => {
	let stage = document.getElementById("lvl"+level);
	stage.style.boxShadow = "0px 0px 12px green"
	let stagename = stage.getElementsByClassName("name").item(0);
	stagename.style.color = "green";
	stagename.innerHTML = "<p>Level" + level + "✅</p>"
});

localStorage.setItem("cleared", JSON.stringify(Array.from(new Set(cleared))));