let hintOpened = false;
let hasAnswered = false;
let lvl = 0;
let explanation = "";

let expbox = document.getElementById("explanation");
let result = document.getElementById("result");
let nextbtn = document.getElementById("next");
let homebtn = document.getElementById("home");
let exptext = document.getElementById("exptext");
let hint = document.getElementById("Hint");

let clrn = "cleared";
let ispzrush = JSON.parse(localStorage.getItem("isPuzzleRush"));
if (ispzrush) {
	hint.style.display = "none";
	clrn = "pzrcleared";
}
let home = (ispzrush)?"../index.html":"../levelselector.html";
console.log(home);

homebtn.onclick = (ispzrush)?showScore:goHome;
nextbtn.onclick = nextLevel;

let cleared = new Set(JSON.parse(localStorage.getItem(clrn)));

function showScore() {
	localStorage.setItem("isPuzzleRush", false);
	score = cleared.size;
	exptext.innerText = "You have cleared " + score + " out of 8 questions!";
	localStorage.setItem(clrn, "[]");
	goHome();
}

function goHome(){
	window.location.replace(home);
}

function nextLevel() {
	if (ispzrush&&cleared.size==7) {
		showScore(home);	
	}
	let nextlvl = (ispzrush) ? getRandomLvl() : lvl + 1;
	window.location.replace(nextlvl + ".html");
}

function checkAns(level, isAns, choice) {
	if (!(hasAnswered && ispzrush)) {
		lvl = level;
		for (let i = 1; i <= 3; i++) {
			let btn = document.getElementById("ans" + i);
			btn.style.backgroundColor = "white";
		}
		let box = document.getElementById("ans" + choice);
		if (isAns) {
			correct(level, box);
		} else {
			incorrect(level, box);
		}
		expbox.style.display = "block";
		hasAnswered = true;
	}
}

function correct(level, box) {
	result.innerText = "✅အဖြေမှန်ပါသည်!";
	box.style.backgroundColor = "green";
	expbox.style.borderColor = "green";
	if (level == 8 && !ispzrush) {
		nextbtn.style.display = "none";
	} else {
		nextbtn.style.display = "block";
	}

	if (!ispzrush) {
	}

	homebtn.style.backgroundColor = "lightgreen";
	cleared.add(level);
	localStorage.setItem(clrn, JSON.stringify([...cleared]));

}

function incorrect(level, box) {
	result.innerText = "❌ အဖြေမှားပါသည်!";
	box.style.backgroundColor = "red";
	expbox.style.borderColor = "red";
	nextbtn.style.display = "none";
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

function getRandomLvl() {
	let clearedset = new Set(cleared);
	let newlvl = Math.floor(Math.random() * 8) + 1;
	while (newlvl == lvl || clearedset.has(newlvl)) {
		newlvl = Math.floor(Math.random() * 8) + 1;
	}
	return newlvl
}
console.log(cleared);