const express = require('express');
const app = express();

app.use(express.json());

const port = process.env.PORT || 5000;
app.listen(port,()=> {console.log("started")});

app.use('/static',express.static('./public'));



app.get('/' , (req, res)=>{
    console.log('request has been made from browser to server');
    res.sendFile('public/index.html',{root:__dirname});
})