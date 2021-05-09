
var theuser = document.getElementById("username").innerHTML = "nebipeker";

var tmp1 = JSON.parse(localStorage.getItem('comments'))
var i;
var text = "";
var tmp2 = [];
for (i = 0; i < tmp1.length; i++) {
    if(tmp1[i].account == "nebipeker"){
        tmp2.push(tmp1[i]);
    }
}


function generate_table() {
  
    var body = document.getElementsByTagName("body")[0];

    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
  
    var column_names = ["commenter","message"]; //format is important
    

    for (var i = 0; i < tmp2.length+1; i++) {
      var row = document.createElement("tr");
      for (var j = 0; j < 2; j++) {
        var cell = document.createElement("td");
        var cellText;
    
        if(i == 0) {
            cell.appendChild(document.createTextNode(column_names[j]));
        }else{
            cellText = document.createTextNode(tmp2[i-1][column_names[j]]);
            cell.appendChild(cellText);
        }
       
        row.appendChild(cell);
      }
  
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tbl);
    tbl.href="results_page.css";
    // sets the border attribute of tbl to 2;
    tbl.setAttribute("border", "5");
    tbl.setAttribute("width","800px");
    tbl.setAttribute("height","50%");
    tbl.setAttribute("bgcolor","mediumturquoise");
    tbl.setAttribute("margin-left","auto");
    tbl.setAttribute("margin-right","auto");
    tbl.setAttribute("align","center");
  }