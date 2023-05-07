require("dotenv").config();
const express =require("express");
const app = express();
const connectDB =require("./db/connect")
const PORT =process.env.PORT || 5000;

const data_routes=require("./routes/data")

app.get("/",(req,res)=>{
    res.send("Hi,I am live");
})
// middeware or to set router
app.use("/api/data",data_routes)

const start =async()=>{ 
try{
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT,()=>{
        console.log(`${PORT} Yes i am connected`);
    });
}catch(error){
    console.log(error);
}
}

start();