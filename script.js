const popup = document.getElementById("popup");

document.getElementById("buttonsignupsoon").addEventListener("click", () => {
	popup.style.display = "none";
	setTimeout(() => {
		popup.style.display = "grid";
	}, 30000);
});
