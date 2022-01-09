const express = require("express");
const app = express();
require('./db/db');
students = require('./model/students');
const port = process.env.PORT || 8000;
app.use(express.json());
app.post('/students',function(req,res){
console.log(req.body);
    const user = new students(req.body);
    user.save().then(()=>{
        res.send(user);
    }).catch((e)=>{
        res.send(e);
    })
   // res.send("hello world the first api");
})

app.get('/',function(req,res){
    res.send("hello world the first api");
})
app.listen(port,()=>{
console.log("connect start");
});