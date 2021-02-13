const foodArray =  [
    {name : "Oatmeal", type: "Breakfast"},
    {name : "Rice", type: "Lunch"},
    {name : "Shawarma", type: "Dinner"},
]

const foodlist = function (req, res, next) {
    res.render('foodlist', { title: 'FoodList', foods : foodArray});
};

const myFavFood = "Shawarma";

const myfavouriteFood = function (req, res, next) {
    res.render('myfavourite-food', { title: 'My Favourite Food', favouriteFood : myFavFood  });
};
module.exports = {
    foodlist,
    myfavouriteFood
};