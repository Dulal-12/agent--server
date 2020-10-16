const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Dulal:dulal1234@cluster0.ml5ji.mongodb.net/creativeAgency?retryWrites=true&w=majority";
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('project'));
app.use(fileUpload());




const client = new MongoClient(uri, { useNewUrlParser: true,useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("creativeAgency").collection("user");
     //adminEmail   
                app.post('/adminEmail',(req,res)=>{
                    const email = req.body;
                    collection.insertOne(email)
                })


                app.post('/review',(req,res)=>{
                    const comment = req.body;
                    collection.insertOne(comment);
                })        
                
                app.get('/adminEmail11',(req,res)=>{
                    collection.find({Email:req.query.Email12})
                    .toArray((err,documents)=>{
                        res.send(documents) 
                    })})

      
                app.get('/dynamicReview',(req,res)=>{
                    const desigenation = 'CEO';
                    collection.find({desigenation:desigenation})
                    .toArray((err,documents)=>{
                      res.send(documents)
                     })})


                app.get('/service',(req,res)=>{
                    collection.find({email:req.query.email}).limit(9)
                    .toArray((err,documents)=>{
                        res.send(documents) 
                    })})

                app.post('/order',(req,res)=>{
                    const order = req.body;
                    collection.insertOne(order);
                })
      
                app.get('/allData',(req,res)=>{
                    const money ='$250';
                    collection.find({money:money})
                    .toArray((err,documents)=>{
                        res.send(documents) 
                        })})
});


app.listen(5000);