var comments = [{"account":"nebipeker","network":"instagram","message":"Great codes","commenter":"@egemeniscan"},{"account":"egemen","network":"instagram","message":"Great codes","commenter":"@egemeniscan"},{"account":"nebipeker","network":"twitter","message":"Good content","commenter":"@elonmusk"}];
localStorage.setItem("comments", JSON.stringify(comments));
document.getElementById("username").innerHTML=localStorage.getItem("currentUser")
function myfoo(){
    localStorage.setItem("searchUsername",document.getElementById("searchUsername").value);
}

function reset(){
    localStorage.setItem("searchUsername","default");
}

function instagram(){
    localStorage.setItem("searchUsername","instagram");
}

function twitter(){
    localStorage.setItem("searchUsername","twitter");
}

function youtube(){
    localStorage.setItem("searchUsername","youtube");
}

