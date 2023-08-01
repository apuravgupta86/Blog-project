const mongoose = require('mongoose')

const fieldSchema = new mongoose.Schema({
   
    first_name:{
        type: String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    user_status:{
        type:Number,
        default : 1, // 1 = > Active, 2 = >De-Active
    }
})

module.exports =  mongoose.model("user",fieldSchema)