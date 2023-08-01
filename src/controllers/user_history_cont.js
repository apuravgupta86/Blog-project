const mongoose = require('mongoose')
const blogModel = require('../models/blog_info')
const commentModel = require('../models/commentmodel')
const likedislikeModel = require('../models/likeModelData')
const usermodel = require('../models/user_info')


const user_history = async(req,res)=>{
    try{
          const userInfo = await usermodel.findById({_id:req.params.user_id})
          
          const commentInfo = await commentModel.find({user_id:userInfo._id})
          .populate([
            {path:"blog_id" , select:["blog_name","blog_title"]},
          ]);
        //   console.log(userInfo._id)
          const likeInfo = await likedislikeModel.find({user_id:userInfo._id})
          .populate([
            {path:"blog_id",select:["blog_like", "blog_dislike"]}           
          ])
        //    console.log(likeInfo)
          const user = [userInfo,commentInfo,likeInfo]
          res.send(user)
     ;   
    }
    catch(error)
    {
        res.status(500).send( error)
    }
}

module.exports = {user_history}