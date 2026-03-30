import express from 'express';

let app = express();


app.get("/",(req,res)=>{
    res.json({message:"hello from universe"});
})


app.get("/health",(req,res)=>{
    res.json({message:"Route is not Healthy"});
})


app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})