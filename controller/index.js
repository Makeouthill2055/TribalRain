const Index = require('../model/index')
const newsmodel = require('../model/news')
const path = require('path')
const fs = require('fs')
const loginmodel = require("../model/login")

exports.getDashboard = (req, res, next) => {
    res.render('dashboard.ejs')
}
exports.getHome = (req, res, next) => {
    res.render('home.ejs')
}
exports.getlogin = (req, res, next) => {
    res.render('login.ejs')
}
exports.logindata = (req, res, next) => {
    loginmodel.create({
        ...req.body
    }).then(xyz => {
        loginmodel.find({})
            .then(logindata => {
            for (i = 0; i < logindata.length; i++) {
                secemail = logindata[i].email
                secpassword = logindata[i].password
            }
            correctemail = "manzilkatwal@gmail.com"
            correctpassword = "apple123"
            if (correctemail == secemail && correctpassword == secpassword){
                res.render("dashboard.ejs")
            }else {
                res.send("password incorrect")
            }
        }).catch(err => {
        console.log(err)
            })
    })
}
exports.getAbout = (req, res, next) => {
    res.render('about.ejs')
}
exports.getContact = (req, res, next) => {
    res.render('contact.ejs')
}
exports.postContact = (req, res, next) => {
    console.log(req.body)
    Index.create({
        ...req.body
    })
    .then(result => {
    console.log("success")
    res.redirect('/home')
})
}
exports.getAdmin =( req, res, next) => {
    res.render ('admin.ejs')
}
exports.getFooter = (req, res, next) => {
    res.render('footer.ejs')
}
exports.getNewsPortal = (req, res, next) => {
    newsmodel.find({})
    .then(newsdata => {
        res.render('newsportal.ejs',{
            newsdata 
        })
    })
  
}

exports.postNewsPortal = (req, res, next) => {


    // newsmodel.create({
    //     ...req.body
    // }).then(abc => {
    //     const file = req.files;
        
    //     console.log(file)
    //     console.log("new crate")
    // })

    console.log(req.files)
    const { image } = req.files
    console.log(req.files)
    const newsphotopath = path.resolve(__dirname,'..','public/image/news', image.name);
    // const uploadpath = path.resolve(__dirname, '..', 'public/images/news', image.name)
    image.mv(newsphotopath, (error) => {
        newsmodel.create({
            ...req.body,
            image: `/news/${image.name}`,
        }).then(abc => {
            newsmodel.find({})
            .then(newsdata => {
                res.render("newsportal.ejs", {
                  newsdata  
                })
            })
        }).catch(ac=> {
            console.log("not create")
        })

    })
}
exports.getNews = (req, res, next) =>{
    newsmodel.find({})
    .then(newsData =>{
        res.render('news.ejs',{
            newsData
        })
    })
    .catch(e=>{
        console.log("Cannot find the news")
    })
}
exports.getadmincontact = (req, res, next) => {
    Index.find({})
    .then(contactdata => {
        res.render('admincontact.ejs',{contactdata})
    })
           
}

exports.getEdited =(req,res,next) =>{
    newsmodel.findById(req.params.id)
    .then(datanews => {
        res.render('editnews.ejs', {
            datanews
        })
    })
}
exports.postUpdate = (req,res,next) => {
    newsmodel.findByIdAndUpdate(req.params.id, { ...req.body}, {new: true})
    .then(e=> {
        res.redirect('/newsportal')
    })
    .catch(err => {
        console.log(err)
    })
}
exports.getDelete = (req, res, next) => {
    Index.findByIdAndDelete(req.params.id)
        .then(result => {
            console.log("deleted successfully mfs")
            res.redirect('/admincontact')
        })
        .catch(err => {
            console.log(err)
        })
}
exports.newsdelete = (req, res, next) => {
    newsmodel.findByIdAndDelete(req.params.id)
        .then(result => {
            console.log("news deleted fucker")
            res.redirect('/newsportal')
})
}

