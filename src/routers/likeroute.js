const multer = require('multer')
const upload = multer()
const express = require('express')
const router = express.Router()
const likecont = require('../controllers/likecont')
const likemode= require('../models/likeModelData')



router.post('/bloglike', upload.none(), likecont.likeuser)
// router.get('/readlike', likecont.readlike)





module.exports = router

