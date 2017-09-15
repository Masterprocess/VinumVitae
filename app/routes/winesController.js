
const express = require('express');
const models = require('../models');
const db = models.cellar;
const router = express.Router();

router.post("/burgers/create", function(req, res) {
    // edited burger create to add in a burger_name
    db.Wines.create({
      burger_name: req.body.wine_name
    })
    // pass the result of our call
    .then(function(dbWines) {
      // log the result to our terminal/bash window
      console.log(dbWines);
    });
  });