document.querySelector("form").addEventListener("submit", signup);
//storing all user array if there is any otherwise empty array
let userJSON = localStorage.getItem('user');
if(userJSON){
    let user= JSON.parse(userJSON);
}
let user=[];
//let user = JSON.parse(localStorage.getItem("user")) || [];
const login=document.getElementById("login-page");
//function to validate the email
function validateEmail(email) {
    // Regular expression pattern for validating email addresses
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Use the test() method to check if the email matches the pattern
    return pattern.test(email);
}
let flag=true
function signup(e) {
    e.preventDefault();
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    // check if any of the fields is empty
    if (
        firstName == "" ||
        lastName == "" ||
        email == "" ||
        password == "" ||
        confirmPassword != password
    ) {
        alert("please fill all the fields!");
    } else {
        if (!validateEmail(email)) {
            alert("E-mailis not valid");
        } else {
            for (var i = 0; i < user.length; i++) {
                if (user[i].email === email) {
                  alert('Email already in use! Try another one!');
                  return;
                }
              }
           
                let userDetails = {
                    id: user.length,
                    firstName: document.getElementById("firstName").value,
                    lastName: document.getElementById("lastName").value,
                    email: document.getElementById("email").value,
                    password: document.getElementById("password").value,
                    confirmPassword: document.getElementById("confirmPassword").value,
                };
                user.push(userDetails);
                localStorage.setItem("user", JSON.stringify(user));
                console.log(user);
                alert("Signup successful");
                //after successful signup redirect to the login page after 1 second
                setTimeout(()=>{
                    login.click()
                },1000);
        }
    }
}