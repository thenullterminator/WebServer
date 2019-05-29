const express= require('express');
const hbs=require('hbs');
var app=express();//creating an application...


hbs.registerPartials( __dirname +'/views/partial');
app.set('view engine','hbs');//setting view engine.....



// app.use(express.static(__dirname+'/public'));// creating a static directory....



app.get('/',(req,res)=>{
// res.send("<h1>Hello this is my first server! :)</h1>"); // html markup in a string

// res.send({
//     name:"Dhairya",
//     surname:"Patel",
//     age:19
// });

res.render('template.hbs',{
title:'Home',
topic:'Home Page',
message:'Welcome to Home!',
year: new Date().getFullYear()
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

app.listen(3000,()=>{
    console.log("Server is up on port 3000");
});// adding listener.....