
function submitComment(){
    var commenter = Json.parse(localStorage.getItem("currentUser"))[0];
    var username = document.getElementById("username").value
    var platform = document.getElementById("platform").value
    var message = document.getElementById("cmessage").value
    var object = {
        "account": username,
        "network": platform,
        "message": message,
        "commenter": commenter
    }
    localStorage.setItem("comments",Json.stringify(object))
}