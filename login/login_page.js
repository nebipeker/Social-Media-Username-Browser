function checkTheUser(){
    var userNickName = document.getElementById("userNick").value;
    var passwordOfUser = document.getElementById("password").value;
    var usernames =JSON.parse(localStorage.getItem("usernames"));
    var password =JSON.parse(localStorage.getItem("passwords"));
    for(i = 0; i< usernames.length;i++){
    if(usernames[i]===userNickName && password[i]===passwordOfUser){
        window.open("../mainpage/main_page2.html");
    }
}
}

