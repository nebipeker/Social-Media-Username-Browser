function validatePassword() {
    var password = document.getElementById("password").value;
    var repeated_password = document.getElementById("repeated_password").value;
    if (password != repeated_password) {
        alert("password doesn't match");
        return false;
    } 
    window.localStorage.setItem("password", password.value);
    window.localStorage.setItem("repeated_password", repeated_password.value);
    return true;
}
