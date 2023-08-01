const blog_info = require('../models/blog_info')
const user_info = require('../models/user_info')
const likeModelData = require('../models/likeModelData')


const likeuser = async (req, res) => {
    try {    
      const existingLike = await likeModelData.findOne({user_id:req.body.user_id,blog_id:req.body.blog_id})
      console.log(existingLike)
      if(existingLike)
      {
        existingLike.blog_like = req.body.blog_like
        existingLike.blog_dislike = req.body.blog_dislike
        await existingLike.save()
        return res.send(existingLike)        
      }    
      // console.log(req.body)
      const likeData = {
        blog_like:req.body.blog_like,
        blog_dislike:req.body.blog_dislike,
        user_id:req.body.user_id,
        blog_id:req.body.blog_id
      }
      const blogLikeDislike = new likeModelData(likeData)
      await blogLikeDislike.save()
      res.send({status:1,blogLikeDislike})
      
    }
    catch(error)
    {
      res.send(500).json(error)
    }
  }
module.exports = {likeuser}