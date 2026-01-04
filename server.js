import express from "express";

const app=express();

app.get('/', (req,res)=>{
    console.log('server is ready');
});

const port= process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`server is at :${port}`);
});
