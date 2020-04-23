const express=require("express");
const app=express();
const bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
  var loginInfo= req.body.login;
  var passwordInfo=req.body.password;
  console.log(loginInfo);
  console.log(passwordInfo);
  if(res.statusCode===200){
    res.sendFile(__dirname+"/dashboard.html")
  }
  else{
    res.sendFile(__dirname+"/loginFail.html")
  }
});

app.post("/failure",function(req,res){
res.redirect("/");
})


app.listen(8080,function(){
  console.log("server Started at port 8080");
});
