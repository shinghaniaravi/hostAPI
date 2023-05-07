require ("dotenv").config();
const connectDB =require("./db/connect");
const Data =require("./models/data");
const DataJson=require("./datas.json")

const start =async ()=>{
try{
    await connectDB(process.env.MONGODB_URL);
    await Data.deleteMany();
    await Data.create(DataJson);
    console.log("sucesss")
}catch(error){
    console.log(error);
}
}

start();