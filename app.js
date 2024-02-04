const express = require('express');
const app = express();
const path  = require('path');
const ejsMate = require('ejs-mate');

app.engine('ejs',ejsMate);
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,"/public")));
app.get('/',(req,res)=>{
    res.render('home');
})

app.get('/ourstory',(req,res)=>{
    res.render('ourstory');
})
app.get('/Tenthingsiloveaboutyou',(req,res)=>{
    res.render('Tenthingsiloveaboutyou');
})
app.get('/Canibeyourvalentine',(req,res)=>{
    res.render('Canibeyourvalentine');
})
app.get('/Canibeyourvalentine/Yes',(req,res)=>
{
  res.render('Yes');  
})
app.get('/Canibeyourvalentine/No',(req,res)=>{
    res.render('No')
})
app.listen(3000,()=>{
    console.log("serving to port 3000");
})