const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
app.use(cors());
app.get('/',async(req,res)=>{
    try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        const data = await response.json();
        res.json(data)
    } catch (error) {
        res.status(500).json({error:'Failed to fetch data'})
    }
});

app.use(cors());app.listen(5000,()=>{
    console.log('Port running')
})