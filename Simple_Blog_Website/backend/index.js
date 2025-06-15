const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let blogs = [];
let nextId = 1;

app.get('/',(req,res)=>{
    res.json(blogs);
});

app.post('/post',(req,res)=>{
    const data = req.body;
    blogs.push({id: nextId++ , ...data});
    res.json(blogs)
});

app.put('/put/:id',(req,res)=>{
    const id = Number(req.params.id);
    blogs = blogs.map(blog => blog.id === id ? { ...req.body, id } : blog);
    res.json(blogs);
});

app.delete('/del/:id',(req,res)=>{
      const id = Number(req.params.id);
      blogs = blogs.filter(blog => blog.id !== id);
      res.json(blogs);
});

app.listen(5000,()=>{
    console.log('Running');
})