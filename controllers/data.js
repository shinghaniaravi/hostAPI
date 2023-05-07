const Data =require("../models/data")
const getAllData=async(req,res)=>{
    const{country,region,topic,sort,intensity,select}=req.query;
    const queryObject={};
    if(country){
        queryObject.country=country;
        // queryObject.country={$regex:country,$options:"N"}
    }
    if(region){
        queryObject.region=region;
    }
    if(intensity){
        queryObject.intensity=intensity;
    }
    if(topic){
        queryObject.topic=topic;
    }
    let apiData=Data.find(queryObject);

    if(sort){
        let sortFix=sort.split(",").join(" ");
        apiData=apiData.sort(sortFix);
    }
    if(select){
        // let selectFix=select.replace(",", " ");
        let selectFix=select.split(",").join(" ");
        apiData=apiData.select(selectFix);
    }

    const myData =await apiData;
    res.status(200).json({myData})
};
const getAllDataTesting=async(req,res)=>{
    const myData =await Data.find(req.query).select("country topic");
    res.status(200).json({myData})
};
module.exports={getAllData,getAllDataTesting};