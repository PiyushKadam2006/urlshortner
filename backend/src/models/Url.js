const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
    original_url: {
        type:String,
        require:true
    },
    short_id :{
        type: String ,
        required: true,
        unique : true,
    },date :{
        type: String ,
        default: Date.now
    },clicks:{
        type:Number,
        required:true,
        default:0
    }
},{timestamps:true});

const url = mongoose.model("url",urlSchema);
module.exports=url;