const commentmodel = require('../models/commentmodel')
const user_info = require('../models/user_info')
const blog_info = require('../models/blog_info')



const addcomment= async(req,res)=>{
    try{
        const formerror = {}
        if(req.body.comments === undefined)
        {
          formerror.comments = "Comment is required"
        }
        const getdata = {
            comments:req.body.comments,  
            user_id: req.body.user_id,
            blog_id: req.body.blog_id
        }
        const user = new commentmodel(getdata)
        await user.save()
        res.send(user)

    }
    catch(error)
    {
        res.status(500).send("Something went wrong , Comment not added"+ error)
    }

}



const readcomment = async(req,res)=>{
    try{
        const user = await commentmodel.find()
        
        console.log(user)
        if(!user)
        {
            res.status(400).json("Cannot find comments")
        }
        res.status(200).json(user)

    }
    catch(error)
    {
        res.status(500).json(error)
    }
}




const deletecomm = async(req,res)=>{
    try{
        const user = await commentmodel.findById(req.params.id)
        if(!user)
        {
           return res.status(400).json("Id not found")
        }
        const del = await user.deleteOne({_id:req.params.id})
        res.status(200).send("Comment is deleted")

    }
    catch(error)
    {
      return  res.status(500).json("Something went wrong")
    }
}





const readcommbyid = async(req,res)=>{
    try{
          const user = await commentmodel.find({blog_id:req.params.blog_id})
          
          if(!user)
          {
          return  res.status(400).send("Id not found")
          }
          res.status(200).json(user)
           

    }
    catch(error)
    {
        res.status(500).json("Wrong id input or Something Went Wrong")
    }
}


// 201 for create, 200 for sucess , 400 for bad request, 404 not found, 500 internal server error

module.exports = {addcomment,readcomment,deletecomm,readcommbyid}