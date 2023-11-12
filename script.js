const signup = document.getElementById("popupsignup");

document.getElementById("buttonsignupsoon").addEventListener("click", () => {
	signup.style.display = "none";
	setTimeout(() => {
		signup.style.display = "grid";
	}, 30000);
});

document.getElementById("buttoncookiesok").addEventListener("click", () => {
	document.getElementById("popupcookies").style.display = "none";
	signup.style.display = "grid";
});
