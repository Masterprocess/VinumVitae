const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // var isLoggedIn = !!req.user;
    res.render('index', {
        // loggedIn: isLoggedIn
    })
})

router.get('/signUp', function (req, res) {
    res.render('signUp')
})



router.get('/userProfile', function (req, res) {
    res.render('userProfile')
})

router.get('/home', function (req, res) {
    res.render('landingPage')
})
module.exports = router;