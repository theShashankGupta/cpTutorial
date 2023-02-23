const express =require('express');
const router = express.Router();
const User = require('../models/user')
const passport = require('passport')
const flash = require('connect-flash')
const catchAsync = require('../utils/catchAsync')

router.get('/register', (req, res)=>(
    res.render('users/register')
))

router.post('/register', catchAsync( async function (req, res, next) {
    try{
    const {email, username, password} = req.body
   const user = new User({email, username})
   
    const registeredUser =  await User.register(user, password)
    req.login(registeredUser, err=>{
        if(err) return next(err);
        else{
            req.redirect('/reviews');
        }
    })   
}
catch(e){
    res.redirect('/register')
}
}))

router.get('/login', (req, res)=>(
    res.render('users/login')
))

router.post('/login', passport.authenticate('local', {failureFlash: true, failureRedirect: '/login'}), (req, res)=>{
req.flash('success', 'welcome back')
res.redirect('/reviews')
})

router.get('/logout', (req, res)=>{
    req.logout()
    res.redirect('/')
})


module.exports = router