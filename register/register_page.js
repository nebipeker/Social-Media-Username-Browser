var usernamesArr = [];
var emailsOfUsers = [];
var passwordList = [];
function saveInfo() {
    var username = document.getElementById("username");
    var email = document.getElementById("email");
    var password = document.getElementById("password").value;
    var repeated_password = document.getElementById("repeated_password").value;
    
    if(usernamesArr.includes(username.value)&&!username.value.includes(null) ){
        alert("Invalid username, please write valid one.")
    }
    
    else if(emailsOfUsers.includes(email.value)){
        alert("Write a valid email, this one is incorrect or used.");
    }else if(password != repeated_password){
        alert("Password doesn't match.\nPlease enter the correct password.");
    }else{
        usernamesArr.push(username.value);
        emailsOfUsers.push(email.value);
        
        
        
        localStorage.setItem("usernames",  JSON.stringify(usernamesArr));
        localStorage.setItem("emails", JSON.stringify(emailsOfUsers));
        
        validatePassword();
        //window.location.href = "../login/login_page.html"
    }
}
function validatePassword() {
    var password = document.getElementById("password");
    passwordList.push(password.value);
    
    
    localStorage.setItem("passwords",JSON.stringify(passwordList));
   
}
