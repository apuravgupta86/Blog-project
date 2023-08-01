const express = require('express')
const controllerdata = require('../controllers/comment_cont')
const commentmodel = require('../models/commentmodel')
const router = express.Router()
const multer = require('multer')
const upload = multer()




router.post('/addcomm',upload.none(), controllerdata.addcomment)
router.get('/readcomm',controllerdata.readcomment)
router.delete('/deletecomm/:id',controllerdata.deletecomm)
router.get('/readcom/:blog_id',controllerdata.readcommbyid)








module.exports = router