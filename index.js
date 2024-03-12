const express=require('express');
const router=require('./routes');
const cors=require('cors');
const mongoose=require('mongoose');
require('dotenv').config();
const uri=process.env.MONGODB_URI;
const app=express();
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(3000,()=>{   
    console.log('Server is running on port 3000');
});

mongoose.connect(uri).then(()=>{
    console.log('Connected to MongoDB');   
}).catch((err)=>{
    console.log('Error connecting to MongoDB',err);
});
