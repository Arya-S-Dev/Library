const express = require("express");
const cors=require("cors")
require('./db/mongoose')
const User=require('./models/user')
const Book=require('./models/book')
const app = express();
const PORT = 3000;
app.use(express.json())
app.use(cors())


app.post('/create',async(req,res)=>{
    const user=new User(req.body)
    
    try{
        await user.save()
        res.status(201).send(user)
    }catch(e){
        res.status(400).send(e)
    }
})

app.get('/read',(req,res)=>{
        User.find({}).then((user)=>{
            res.send(user)
        }).catch((e)=>{
            res.sendStatus(500).send()
        })
    })

app.post('/addbook',async(req,res)=>{
        const book=new Book(req.body)
        
        try{
            await book.save()
            res.status(201).send(book)
        }catch(e){
            res.status(400).send(e)
        }
    })

app.get('/readbook',(req,res)=>{
        Book.find({}).then((book)=>{
            res.send(book)
        }).catch((e)=>{
            res.sendStatus(500).send()
        })
    })


app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});