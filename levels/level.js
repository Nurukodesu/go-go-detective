let cleared = JSON.parse(localStorage.getItem("cleared"));

function checkAns(level, ans, choice, btnc){
	let expbox = document.getElementById("explanation");
	let result = document.getElementById("result");
	let nextbtn = document.getElementById("next");
	let homebtn = document.getElementById("home");
	for (let i = 1; i<= btnc;i++){
		let btn = document.getElementById("ans"+i);
		btn.style.backgroundColor = "white";	
	}
	let box = document.getElementById("ans"+ choice);
	if (choice == ans){
		result.innerText = "✅အဖြေမှန်ပါသည်!";
		box.style.backgroundColor = "green";
		expbox.style.borderColor = "green";
		nextbtn.style.display = "block";
		homebtn.style.backgroundColor = "lightgreen";
		cleared.push(level);
		localStorage.setItem("cleared", JSON.stringify(cleared));
	} else {
		result.innerText = "❌ အဖြေမှားပါသည်!";
		box.style.backgroundColor = "red";
		expbox.style.borderColor = "red";
		nextbtn.style.display = "none";
		homebtn.style.backgroundColor = "red";
	}
	expbox.style.display="block";
}

function showHint(hint){
	let nextbtn = document.getElementById("next");
	let homebtn = document.getElementById("home");
	let exptext = document.getElementById("exptext");
	let expbox = document.getElementById("explanation")
	exptext.innerText = hint;
	expbox.style.display = "block";
	nextbtn.style.display = "none";
	homebtn.style.display = "none";
}