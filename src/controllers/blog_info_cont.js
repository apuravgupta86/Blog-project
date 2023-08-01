const datamodel = require('../models/blog_info')
const multer = require('multer')
const mongoose = require('mongoose')
const image_multer = require('../images/image_multer')
const commentmodel = require('../models/commentmodel')
const likemodel = require('../models/likeModelData')
const likeModelData = require('../models/likeModelData')



const add_info = async(req,res)=>{
    try{
        const formerror = {}
    if(req.body.blog_name === undefined){
         formerror.blog_name = "Blog_name is required"
    }
    if(req.body.blog_title === undefined){
        formerror.blog_title = "Blog_title is required"
    }
    if(req.body.short_description === undefined){
        formerror.short_description = "Short_description is required"
    }
    if(req.body.description === undefined ){
        formerror.description = "Description is required"
    }
    console.log(req.file)
    if(req.file === undefined ){
        formerror.blog_image = "Blog_image is required"
    }
    if(Object.keys(formerror).length !== 0){
        return res.send(formerror)
    }

    const getData = {
        user_id:req.body.user_id,
        blog_name:req.body.blog_name,
        blog_title:req.body.blog_title,
        short_description:req.body.short_description,
        description:req.body.description,
        blog_image:req.file.filename  
    }
    const user = new datamodel(getData)
    await user.save()
    res.send(`${user} is added successfully`)
    }
    catch(error){
        res.status(404).send(error)
    }
}







const updateblog = async(req,res)=>{
    try{
         const user = await datamodel.findById(req.params.id)

         if(req.body.blog_name){
            user.blog_name = req.body.blog_name
         }
         if(req.body.blog_title){
            user.blog_title = req.body.blog_title
         }
         if(req.body.short_description){
            user.short_description = req.body.short_description
         }
         if(req.body.description){
            user.description = req.body.description
         }
         console.log(req.file)
         if(req.file){
            user.blog_image = req.file.filename
         }
    
         await user.save()
         res.send(`user is edited successfully`)
         
    }
    catch(error){
        res.status(404).send(error)
    }
}




const read_blog = async(req,res)=>{
    try{
        const blogs = await datamodel.findById(req.params.id)
        if(!blogs)
        {
            return res.send("Id not found")
        } 
       const comments = await commentmodel.find({blog_id:blogs._id}).populate([
        {path:'user_id', select:['first_name','last_name']}
    ]);
       const likes = await likeModelData.find({blog_id:blogs._id}).where({blog_like:1})
       console.log(likes.length)
       const dislikes = await likeModelData.find({blog_id:blogs._id}).where({blog_dislike:1})
       console.log(dislikes.length)
        res.send({blogs,comments,likes:likes.length,dislikes:dislikes.length})
    }
    catch(error){
        res.status(404).send(error)
    }
}





const readallblog = async(req,res)=>{
    try{
        const user = await datamodel.find()
        const comments = await commentmodel.find({blog_id:user.id}).populate([
            {path:'user_id', select:['first_name','last_name']}
        ])
       return res.send({user,comments}   )
    }
    catch(error)
    {
        res.status(500).send("Something Went Wrong")
    }
}



const softdel = async(req,res)=>{
    try{
        const user = await datamodel.findById(req.params.id)
        if(!user)
        {
            return res.send("User not found")
        }
        // const del =  user.deleteOne({_id : req.params.id})
        user.deleted = true;
        console.log(user)
        await user.save();
        res.send("Blog is soft deleted")
    }
    catch(error){
        res.status(404).send("Id not found or Something went wrong")
    }
}









module.exports = {add_info , updateblog , read_blog , softdel , readallblog}