const express = require('express')
const mongoose = require('mongoose')
const uploadfile = require("express-fileupload")
const router = require('./routes/index')


const path = require('path')

const app = express();

app.set('view engine', 'ejs')

app.set('views', 'view')

app.use(express.static(path.join(__dirname, "public")));
app.use(uploadfile())

mongoose.connect('mongodb://localhost/contactdb', {
    useNewUrlParser: true,
    useUnifiedTopology:true,
}).then (e => {
    console.log("db connected")
})
app.use(express.urlencoded({extended:true}))
app.use(express.json())





app.use(router);

app.listen(process.nextTick.PORT || 3000, (err) => {
    if (!err) {
        console.log("server is ok in localhost 3000")

    } else{
        console.log("server if fucked mate")
    }
})