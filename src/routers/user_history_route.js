const express = require('express')
const router = express.Router()
const user_history_cont = require('../controllers/user_history_cont')
const multer = require('multer')
const upload = multer()





router.get('/getuserhistory/:user_id', user_history_cont.user_history)




module.exports = router


