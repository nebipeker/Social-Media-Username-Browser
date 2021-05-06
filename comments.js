
//let data = JSON.parse('');
// local stogaredakileri arayan ve commentleri cikaran
// struct generate eden ve document write atan DONE
// eski yorumlari silen
//document.writeln('<button onclick="addToLocal()">Add To localstorage</button>')
//document.write('<button onclick="print()">print localstorage</button>')
var comments = [{"account":"nebipeker","network":"instagram","message":"Great codes","commenter":"@egemeniscan"}];
localStorage.setItem("comments", JSON.stringify(comments));
var storage_comments = JSON.parse(localStorage.getItem("comments"));


//document.write("<p>"+storage_comments[0].account+"</p>")

//createComment("Betul","Super","Twitter")
//createComment("Betul","Super","Twitter")
//deleteOld()
function createComment(commentOwner,commentMessage,commentNetwork){
    document.write('\
    <div class="comment">\
        <div class="comment-owner">\
            <p> '+commentOwner+' </p>\
        </div>\
        <div class="comment-message">\
            <p>'+commentMessage+'</p>\
        </div>\
        <div class="network">\
            <p>'+commentNetwork+'</p>\
        </div>\
    </div>');
    
}

function deleteOld(){
    var comment = document.getElementsByClassName('comment');
    //$(comment).remove();
    
}

function addToLocal() {
    if (localStorage) {
        localStorage.clear()
        var comments = {"account":"nebipeker","network":"instagram","message":"Great codes","commenter":"@egemeniscan"};
        localStorage.setItem("comments", JSON.stringify(comments));
        console.log(localStorage.comments);
        
    } else {
        alert("Sorry, your browser do not support local storage.");
    }
}

function print(){
    if(localStorage){
        console.log(localStorage);
    }
}

