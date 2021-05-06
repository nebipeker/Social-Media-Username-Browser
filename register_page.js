var usernamesArr = [];
var emailsOfUsers = [];
function saveInfo() {
    var username = document.getElementById("username");
    if(usernamesArr.includes(username.value)){
        alert("This user name already taken \n Please enter a new infos...")
    }else if(emailsOfUsers.includes(email.value)){
        alert("This email adress already using for one account..")
    }else{
        usernamesArr.push(username.value);
        emailsOfUsers.push(email.value);
        localStorage.setItem("usernames", JSON.stringify(usernamesArr));
        localStorage.setItem("emails", JSON.stringify(emailsOfUsers));
        alert("User registered successfully")
    }
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
