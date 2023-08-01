const controller = require('../controllers/user_cont')
const express = require('express')
const router = express.Router()
const multer = require('multer')
const upload = multer()



router.post('/adduser',upload.none(),controller.adduser)
router.put('/update/:id',upload.none(),controller.updateuser)
router.get('/readalluser',controller.readalldata)
router.get('/read/:id',controller.readuser)
router.delete('/deleteuser/:id',controller.deleteuser)




module.exports = router