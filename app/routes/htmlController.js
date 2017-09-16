const express = require('express');
const router = express.Router();
const models = require('../models');
const Cellar = models.cellar;

router.get('/', (req, res) => {
    res.render('index', {
        // loggedIn: isLoggedIn
    })
})

router.get('/signUp', function (req, res) {
    res.render('signUp')
})

router.get('/home', function (req, res) {
    res.render('userHomePageAndCellar')
})

router.get('/search', function (req, res) {
    res.render('wineBasicSearch')
})



module.exports = router;