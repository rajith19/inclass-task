var express = require('express');
var router = express.Router();
const ctrlMain = require('../controllers/main')
const ctrlFood = require('../controllers/foods')

router.get('/', ctrlMain.index);
router.get('/list', ctrlFood.foodlist);
router.get('/favourite', ctrlFood.myfavouriteFood);

module.exports = router;
