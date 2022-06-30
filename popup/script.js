const open = document.getElementById("open");
const close = document.getElementById("close");
const popupCtnr = document.querySelector(".popup-container");

open.addEventListener("click", () => {
	popupCtnr.classList.toggle("notHidden");
});
close.addEventListener("click", () => {
	popupCtnr.classList.toggle("notHidden");
});
