function saveInfo() {
    var username = document.getElementById("username");
    var email = document.getElementById("email");

    localStorage.setItem("username", username.value);
    localStorage.setItem("email", email.value);

}
function validatePassword() {
    var password = document.getElementById("password").value;
    var repeated_password = document.getElementById("repeated_password").value;
    if (password != repeated_password) {
        alert("password doesn't match");
        return false;
    } 
    localStorage.setItem("password", password.value);
    localStorage.setItem("repeated_password", repeated_password.value);
    return true;
}
