function startPuzzleRush(){
	localStorage.setItem("isPuzzleRush", true);
	localStorage.setItem("score", 0);
	let level = Math.floor(Math.random()*8)+1;
	window.location.replace(
		"levels/" + level + ".html"
	);
	localStorage.setItem("pzrcleared", JSON.stringify([]));

}