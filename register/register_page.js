var usernamesArr = [];
var emailsOfUsers = [];
var passwordList = [];
function saveInfo() {
    var username = document.getElementById("username");
    var email = document.getElementById("email");
    var password = document.getElementById("password").value;
    var repeated_password = document.getElementById("repeated_password").value;
    if(usernamesArr.includes(username.value)){
        alert("This user name already taken \n Please enter a new infos...")
    }else if(emailsOfUsers.includes(email.value)){
        alert("This email adress already using for one account..")
    }else if(password != repeated_password){
        alert("Password doesn't match.\nPlease enter the correct password.");
    }else{
        usernamesArr.push(username.value);
        emailsOfUsers.push(email.value);
        localStorage.setItem("usernames", JSON.stringify(usernamesArr));
        localStorage.setItem("emails", JSON.stringify(emailsOfUsers));
        alert("User registered successfully")
        validatePassword();
    }
}
function validatePassword() {
    var password = document.getElementById("password");
    passwordList.push(password.value);
    localStorage.setItem("passwords", JSON.stringify(passwordList));
}
