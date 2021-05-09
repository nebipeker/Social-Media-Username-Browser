function checkTheUser(){
    var userNickName = document.getElementById("userNick").value;
    var emailOfUser = document.getElementById("email").value;
    var passwordOfUser = document.getElementById("password").value;
    if(localStorage.getItem("usernames").includes(userNickName)
    &&localStorage.getItem("emails").includes(emailOfUser)&& localStorage.getItem("passwords").includes(passwordOfUser)){
        window.open("../mainpage/main_page2.html");
    }
}
