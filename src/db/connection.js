const mongoose = require('mongoose')

const connection = mongoose.connect(`mongodb://127.0.0.1:27017/blog_info`,{useNewUrlParser:true})
.then(()=>{
    console.log("connected to database")
})
.catch(()=>{
    console.log("Not connected to database , Please check connection")
})


module.exports = connection