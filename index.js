const express=require('express');

const app=express();



app.use('/',(req,res,next)=>{
	//res.send("This is the user page");
	console.log("Testing middleware");
	next();
});

app.use('/users',(req,res,next)=>{
	//res.send("This is the user page");
	res.send("<h1>This is the user page </h1>");
});

app.use('/',(req,res,next)=>{
	res.send("<h1>This is the home page</h1>");
});



app.listen(8080);