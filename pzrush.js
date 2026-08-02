function startPuzzleRush(){
	localStorage.setItem("isPuzzleRush", true);
	localStorage.setItem("score", 0);
	window.location.replace(
		"levels/" + (Math.floor(Math.random()*8)+1) + ".html"
	);
}