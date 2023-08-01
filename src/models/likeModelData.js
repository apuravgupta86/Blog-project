    const mongoose = require('mongoose')


    const likeSchemaa = new mongoose.Schema({
        user_id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
            required: true
        },
        blog_id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'blog',
            required: true
        },
        blog_like:{
            type: String,
         },
         blog_dislike:{
            type: String,
         }
    });
    

    module.exports =  mongoose.model('like_and_dislike', likeSchemaa);