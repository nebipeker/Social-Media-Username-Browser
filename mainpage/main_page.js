var comments = [{"account":"nebipeker","network":"instagram","message":"Great codes","commenter":"@egemeniscan"},{"account":"egemen","network":"instagram","message":"Great codes","commenter":"@egemeniscan"},{"account":"nebipeker","network":"twitter","message":"Good content","commenter":"@elonmusk"}];
if(comments != null && comments != ""){
localStorage.setItem("comments", JSON.stringify(comments));
}
function myfoo(){
    localStorage.setItem("searchUsername",document.getElementById("searchUsername").value);
}

function reset(){
    localStorage.setItem("searchSocialMedia","default");
}
reset()
function instagram(){
    localStorage.setItem("searchSocialMedia","instagram");
}

function twitter(){
    localStorage.setItem("searchSocialMedia","twitter");
}

function youtube(){
    localStorage.setItem("searchSocialMedia","youtube");
}

