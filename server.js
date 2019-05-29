const fs =require('fs');
const express= require('express');
const hbs=require('hbs');
const port =process.env.PORT||3000;
var app=express();//creating an application...


hbs.registerPartials( __dirname +'/views/partial');
app.set('view engine','hbs');//setting view engine.....



// app.use(express.static(__dirname+'/public'));// creating a static directory....

app.use((req,res,next)=>{

    var now=new Date().toString();
    var log=`${now}: ${req.method}  ${req.url}`;
    console.log(log);
    fs.appendFileSync('server.log',log+'\n');
    next();
});


// Maintenance page which prevents any of the handlers to work...
// app.use((req,res,next)=>{ 

//     res.render('maint.hbs');

// });



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

app.listen(port,()=>{
    console.log("Server is up on port "+ port);
});// adding listener.....