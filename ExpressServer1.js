let express = require('express');
let path = require('path');
let server = express(); //Server is created

let name="Sree";
let age=21;
let city="Gudur";
let x=10,y=18;

server.get('/',(req,res)=>{                  //C:\MicroServiceWithNode-24Dec2022OB\ServerSideApps
    res.sendFile('indexh.html',{root: path.join(__dirname)}); 
});

server.get('/home',(req,res)=>{
    res.send(`<div align="center" style="background-color:orange">
            <br><br><br>
            <h1>Accenture Solutions Private Ltd</h1>
            <h1>Hello, welcome ${name}.</h1>
            <h2>Location : Bangalore</h2>
            <br><br><br>
            </div>
        `);
    res.end();
});

server.get('/personaldetails',(req,res)=>{
    res.send(`<div align="center" style="background-color:lightblue">
            <br><br><br>
            <h1>Hello, welcome ${name}.</h1>
            <h2>Age : 21</h2>
            <h2>Mobile No : 8790350987</h2>
            <h2>city : Gudur</h2>
            <br><br><br>
            </div>
        `);
    res.end();
});

server.get('/educationaldetails',(req,res)=>{
    res.send(`<div align="center" style="background-color:yellow">
            <br><br><br>
            <h1>Hello, welcome ${name}.</h1>
            <h2>Degree : B.Tech</h2>
            <h2>Location : Nellore</h2>
            <br><br><br>
            </div>
        `);
    res.end();
});

server.get('/contactus',(req,res)=>{
    res.send(`<div align="center" style="background-color:pink">
            <br><br><br>
            <h1>Accenture Solutions Private Ltd</h1>
            <h2>Location : Bangalore</h2>
            <h2>mailId : accenture@gmail.com</h2>
            <br><br><br>
            </div>
        `);
    res.end();
});

server.listen(7000,() =>{
    console.log("My Express Server is Listening on port_no 7000...");
});