
const express = require('express');
const session = require('express-session');
const router = express.Router();
const models = require('../models');
const Cellar = models.cellar;

router.post("/create", (req, res) => {
    var newWine = {
      wineName: req.body.wine_name,
      wineCode: req.body.wine_code,
      wineLink: req.body.wine_link,
      winePrice: req.body.wine_price,
      wineRegion: req.body.wine_region,
      wineRank: req.body.wine_rank,
      wineType: req.body.wine_type,
      wineVarietal: req.body.wine_varietal,
      wineVintage: req.body.wine_vintage,
      wineWinery: req.body.wine_winery,
      wineWineryID: req.body.wine_wineryID

    }
    models.Cellar.create(newWine).then(() => {
      // log the result to our terminal/bash window
     /* models.db.findAll({}).then((allWines) => {
        res.json(wines);
        res.render('/search');
    });*/
  });
});

  module.exports = router;