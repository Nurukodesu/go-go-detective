let cleared = JSON.parse(localStorage.getItem("cleared"));
let hintOpened = false;
let explanation = "";

let expbox = document.getElementById("explanation");
let result = document.getElementById("result");
let nextbtn = document.getElementById("next");
let homebtn = document.getElementById("home");
let exptext = document.getElementById("exptext");

let ispzrush = localStorage.getItem()

function checkAns(level, isAns, choice) {
	for (let i = 1; i <= 3; i++) {
		let btn = document.getElementById("ans" + i);
		btn.style.backgroundColor = "white";
	}
	let box = document.getElementById("ans" + choice);
	if (isAns) {
		correct(level);
	} else {
		incorrect();
	}
	expbox.style.display = "block";
}

function correct(level) {
	result.innerText = "✅အဖြေမှန်ပါသည်!";
	box.style.backgroundColor = "green";
	expbox.style.borderColor = "green";
	if (nextbtn != null) {
		nextbtn.style.display = "block";
	}
	homebtn.style.backgroundColor = "lightgreen";
	cleared.push(level);
	localStorage.setItem("cleared", JSON.stringify(cleared));

}

function incorrect() {
	result.innerText = "❌ အဖြေမှားပါသည်!";
	box.style.backgroundColor = "red";
	expbox.style.borderColor = "red";
	if (nextbtn != null) {
		nextbtn.style.display = "none";
	}
	homebtn.style.backgroundColor = "red";

}

function showHint(hint) {
	if (hintOpened) {
		exptext.innerText = explanation;
		expbox.style.display = "none";
		hintOpened = false;
	} else {
		explanation = exptext.innerText;
		exptext.innerText = hint;
		expbox.style.display = "block";
		if (nextbtn != null) {
			nextbtn.style.display = "none";
		}
		homebtn.style.display = "none";
		hintOpened = true;
	}
}