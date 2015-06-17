var express = require('express');
var router = express.Router();
var mainController = require('../controllers/main');

/* GET home page. */
router.get('/', function(req, res, next) {
  mainController.home(req,res);
});

router.get('/countries', function (req, res, next){
  mainController.getCountries(req,res);
});

router.get('/regions', function (req, res, next){
  mainController.getRegions(req,res);
});

router.get('/cities', function (req, res, next){
  mainController.getCities(req,res);
});

router.get('/models', function (req, res, next){
  mainController.getModels(req,res);
});

router.get('/list', function (req, res, next){
  mainController.list(req,res);
});

module.exports = router;
