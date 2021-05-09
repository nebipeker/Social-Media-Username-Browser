

var commenter = localStorage.getItem("currentUser")

document.getElementById("NavbarCommenterName").innerHTML=""+commenter
function submitComment(){
    
    var commenter = (localStorage.getItem("currentUser"));
    var username = document.getElementById("username").value
    var platform = document.getElementById("platform").value
    var message = document.getElementById("cmessage").value
    var infos = {
        "account": username,
        "network": platform,
        "message": message,
        "commenter": commenter
    }
    
    var comments= localStorage.getItem("comments")
    localStorage.setItem("comments","")
    if(comments != null && comments!=""){
    localStorage.setItem("comments",comments+JSON.stringify(infos))
    }else{
        localStorage.setItem("comments",JSON.stringify(infos))
    }
}
