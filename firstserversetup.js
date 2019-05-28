const express= require('express');

var app=express();//creating an application...

app.get('/',(req,res)=>{
// res.send("<h1>Hello this is my first server! :)</h1>");

res.send({

    name:"Dhairya",
    surname:"Patel",
    age:19
});


});
// Very First route set.......


app.get('/about',(req,res)=>{

    res.send("About Page");
});
//new route.....

app.get('/bad',(req,res)=>{
    res.send({
        status:"Bad Request"
    })
});
// another  route.....

app.listen(3000);// adding listener.....