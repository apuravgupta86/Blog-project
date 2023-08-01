const express = require('express')
const router = express.Router()
const controllerdata = require('../controllers/blog_info_cont')
const multer = require('multer')
const upload = require('../images/image_multer')





router.post('/blogs', upload.single("blog_image"), controllerdata.add_info)
router.put('/updateblogs/:id', upload.single("blog_image"), controllerdata.updateblog)
router.get('/read_blog/:id', controllerdata.read_blog)
router.delete('/deleteblog/:id', controllerdata.softdel)
router.get('/readallblog',controllerdata.readallblog)








module.exports = router