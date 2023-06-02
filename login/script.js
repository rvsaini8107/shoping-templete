const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", validCred);

function validCred(e) {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem("user"));
    if (!data) {
        alert("No user found! Please Sign up first.");
        return;
    }
    for (let i = 0; i < data.length; i++) {
        if (data[i].email === email.value && data[i].password === password.value) {
            console.log("hello");
            let currentUser = data[i];
            localStorage.setItem("currentUser", JSON.stringify(currentUser));
            window.location.href = "../shop/index.html";
            return;
        }
    }
    alert("Credentials do not match!");
}