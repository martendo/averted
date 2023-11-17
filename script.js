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

const cookies = document.getElementById("popupcookies");
document.getElementById("buttoncookiesok").addEventListener("click", () => {
	cookies.style.display = "none";
	signup.style.display = "grid";
});

const float = document.getElementById("floatad");
let floatleft = false;
document.getElementById("buttonfloatclose").addEventListener("click", () => {
	floatleft = !floatleft;
	if (floatleft) {
		float.style.right = "unset";
		float.style.left = "20px";
	} else {
		float.style.right = "";
		float.style.left = "";
	}
});
