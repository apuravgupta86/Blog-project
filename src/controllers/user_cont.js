const usermodel = require('../models/user_info')



const adduser = async(req,res)=>{
   
    try{
      
        const formerror = {}
        
     if(req.body.first_name === undefined)
     {
        formerror.first_name = "first_name is required"
     }
     if(req.body.last_name=== undefined)
     {
        formerror.last_name = "last_name is required"
     }
     if(req.body.contact=== undefined)
     {
        formerror.contact= "contact is required"
     }
     if(req.body.email === undefined)
     {
        formerror.email = "email is required"
     }
     if(Object.keys(formerror).length!== 0)
     {
        return res.send(formerror)
     }

     const getdata = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        contact: req.body.contact,
        email: req.body.email
         }
     
     const user = new usermodel(getdata)
     
     
     await user.save()
     res.send(user)

    }
    catch(error)
    {
        res.status(500).send("Something went wrong or You didnot fill the form correctly")
    }
}


const updateuser = async(req,res)=>{
    try{
         const user = await usermodel.findById(req.params.id)
    
            
        
            user.first_name = req.body.first_name ? req.body.first_name : user.first_name
            user.last_name = req.body.last_name ? req.body.last_name : user.last_name          
            user.email = req.body.email ? req.body.email : user.email
        

        await user.save()
        return res.send("User is updated")

    }
    catch(error)
    {
        res.status(500).send(error)
    }
}


const readalldata = async(req,res)=>{
     try{
        const user = await usermodel.find().where({deleted:false})
        
        res.send(user)

     }
     catch(error)
     {
        res.status(404).send("Something went wrong")
     }
}


const readuser = async(req,res)=>{
    try{
        const user = await usermodel.findById(req.params.id)
        if(!user)
        {
           return res.send("User not found") 
        }
        res.send(user)

    }
    catch(error)
    {
        res.status(404).send("Something went wrong or wrong id entered")
    }
}


const deleteuser = async(req,res)=>{
    try{
        const user = await usermodel.findById(req.params.id)
        if(!user)
        {
            return res.send("Id not found")
        }
       user.deleted = req.body.status
       await user.save()
      
       res.send("User is deleted")

    }
    catch(error)
    {
        res.status(404).send("User not found , try again")
    }
}



module.exports = {adduser,updateuser,readalldata,readuser,deleteuser}
