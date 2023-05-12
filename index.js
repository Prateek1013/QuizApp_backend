const express=require("express");
const app=express();
const cors=require('cors');
const mongoose = require('mongoose');
const Quiz=require('./Model/quiz_model');
const PORT = process.env.PORT || 5000;
MONGO_URL="mongodb+srv://prateek9771196112:NygzKXgtL3effsJO@cluster0.zxqncfm.mongodb.net/?retryWrites=true&w=majority"
app.use(cors());
mongoose.connect(MONGO_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("DB connected");
})
.catch(err=> console.log(err.message));

app.get('/api/data', async (req,res) =>{
    try {
        const data= await Quiz.find();
        //console.log(data[0]);
        return res.json(data);
    } catch (error) {
        console.log(error.message);
    }
})

app.listen(PORT,()=>{
    console.log("server is running");
})