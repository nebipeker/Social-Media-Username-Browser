const express = require("express")
const app = express()

var comments=[]

app.get("/comments",(req,res)=>{
    res.send({
        comment:comments
    });
});
app.get("/comment/:id",(req,res)=>{
    comment:comments[id]
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});