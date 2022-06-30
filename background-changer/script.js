const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
	const random = randomBg();
	document.body.style.background = random;
	btn.innerText = random.toUpperCase();
});

function randomBg() {
	let ran1 = Math.floor(Math.random() * 256);
	let ran2 = Math.floor(Math.random() * 256);
	let ran3 = Math.floor(Math.random() * 256);

	const bg = `rgb(${ran1},${ran2},${ran3})`;

	// const bg = `hsl(${Math.floor(Math.random() * 360)},100%,50%)`;

	return bg;
}
