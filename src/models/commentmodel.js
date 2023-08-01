const mongoose = require('mongoose')

const fieldSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    blog_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:  'blog',
        required: true
    },
    comments:{
        type:String,
            }  
})

module.exports = mongoose.model("comment",fieldSchema)