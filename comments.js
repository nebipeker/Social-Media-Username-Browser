
//let data = JSON.parse('');
// local stogaredakileri arayan ve commentleri cikaran
// struct generate eden ve document write atan
// eski yorumlari silen
var comments = [{"account":"nebipeker","network":"instagram","message":"Great codes","commenter":"@egemeniscan"}];
localStorage.setItem("comments", JSON.stringify(comments));
var storage_comments = JSON.parse(localStorage.getItem("comments"));

console.log(localStorage);
console.log(localStorage.comments);
console.log(typeof localStorage.comments);
document.write("<p>"+storage_comments[0].account+"</p>")

function addToLocal() {
    if (localStorage) {
        localStorage.clear()
        var comments = {"account":"nebipeker","network":"instagram","message":"Great codes","commenter":"@egemeniscan"};
        localStorage.setItem("comments", JSON.stringify(comments));
        console.log(localStorage.comments);
        document.getElementById("comments").innerHTML = localStorage.comments;
    } else {
        alert("Sorry, your browser do not support local storage.");
    }
}

function print(){
    if(localStorage){
        console.log(localStorage);
    }
}