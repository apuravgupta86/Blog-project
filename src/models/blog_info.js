const mongoose = require('mongoose')


const blogSchema = new mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user_info'
    },
    blog_name:{
        type: String,
        required: true
    },
    blog_title:{
        type:String,
        required: true
    },
    short_description:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    blog_image:{
        type:String,
        required: true
    }
})
const user =  mongoose.model("blog",blogSchema)

module.exports = user