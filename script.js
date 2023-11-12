const signup = document.getElementById("popupsignup");
const buttonsoon = document.getElementById("buttonsignupsoon");
let soontime = 30;

buttonsoon.addEventListener("click", () => {
	signup.style.display = "none";
	setTimeout(() => {
		signup.style.display = "grid";
	}, soontime * 1000);
	soontime -= 5;
	if (soontime < 5) {
		soontime = 5;
	}
	buttonsoon.innerHTML = `Sign Up<br>in ${soontime} seconds`;
});

document.getElementById("buttoncookiesok").addEventListener("click", () => {
	document.getElementById("popupcookies").style.display = "none";
	signup.style.display = "grid";
});
