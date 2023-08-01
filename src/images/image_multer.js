const multer = require('multer')


const upload = multer({
    storage:multer.diskStorage({
        destination:"blog_image",
        filename:function(req,file,cb)
        {
            cb(null,"profile_img"+".jpg")
        }
    })
})



module.exports = upload