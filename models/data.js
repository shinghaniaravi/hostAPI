const mongoose =require("mongoose");

const dataSchema = new mongoose.Schema({
    intensity: {
        type:Number
    },
    likelihood: {
        type:Number
    },
    relevance: {
        type:Number
    },
    start_year: {
        type:Date,
        default:Date.now(),    
    },
    country: {
        type:String
    },
    topic: {
        type:String
    },
    region: {
        type:String 
    },
})

module.exports=mongoose.model('Data',dataSchema);
