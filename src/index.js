const mongoose = require('mongoose')
const connection = require('./db/connection')
const blog_info = require('./models/blog_info')
const image_multer = require('./images/image_multer')
const blog_info_cont = require('./controllers/blog_info_cont')
const express = require('express')
const app = express()
const routeOne = require('./routers/blog_info_route')
const user_cont = require('./controllers/user_cont')
const user_info = require('./models/user_info')
const routetwo = require('./routers/user_info_route')
const commentmodel = require('./models/commentmodel')
const comment_cont = require('./controllers/comment_cont')
const routethree = require('./routers/comment_route')
const routefour = require('./routers/likeroute')
const likecont = require('./controllers/likecont')
const routefive = require('./routers/user_history_route')



app.use(express.json())
app.use(routeOne)
app.use(routetwo)
app.use(routethree)
app.use(routefour)
app.use(routefive)


app.listen(4500,()=>{
    console.log("Connected to localhost:4500")
})