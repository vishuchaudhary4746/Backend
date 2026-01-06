import express from "express";

const app=express();

app.get('/', (req,res)=>{
    console.log('server is ready');
    res.send("Your server is responding :)")
});


//get a list of 5 jokes














const port= process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`server is at :${port}`);
});
