var express = require('express');
var router = express.Router();
const ctrlMain = require('../controllers/main')
const ctrlFood = require('../controllers/food')

router.get('/', ctrlFood.homelist);
router.get('/foods/:foodid', ctrlFood.foodInfo);

// router.get('/list', ctrlFood.foodlist);
// router.get('/favourite', ctrlFood.myfavouriteFood);

module.exports = router;
