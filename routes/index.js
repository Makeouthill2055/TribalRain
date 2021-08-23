const express = require('express')

const router = express.Router();

const indexController = require("../controller/index")

router.get('/', indexController.getDashboard)

router.get('/home', indexController.getHome)

router.get('/login', indexController.getlogin)

router.post('/loginau', indexController.logindata)

router.get('/about', indexController.getAbout)

router.get('/contact', indexController.getContact)

router.post('/contactdata',indexController.postContact ) 

router.get('/admin',indexController.getAdmin)

router.get('/footer',indexController.getFooter)

router.get('/newsportal',indexController.getNewsPortal)

router.post('/newsdatas',indexController.postNewsPortal)

router.get('/news',indexController.getNews)

router.get('/admincontact', indexController.getadmincontact)

router.get('/delete/:id',indexController.getDelete)

router.get('/editnews/:id', indexController.getEdited)

router.post('/updatenews/:id',indexController.postUpdate)

router.get('/deletenews/:id', indexController.newsdelete)




module.exports = router


