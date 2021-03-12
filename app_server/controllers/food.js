const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
};


const _renderHomepage = function (req, res, responseBody) {
    res.render('foodlist', {
        foods: responseBody
    });
};


const homelist = function (req, res) {
    const path = '/api/foods';
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'GET',
        json: {}
    };
    request(
        requestOptions,
        (err, response, body) => {
            _renderHomepage(req, res, body)
        }
    );
};

const _renderDetailPage = function (req, res, responseBody) {
    res.render('food-info', {
        currentFood: responseBody
    });
};

const foodInfo = function (req, res) {
    const path = `/api/foods/${req.params.foodid}`
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'GET',
        json: {}
    };
    request(
        requestOptions,
        (err, response, body) => {
            _renderDetailPage(req, res, body);
        }
    );
};


const _renderCreatePage = function (req, res) {
    res.render('create-new-food', {
        title: "Create New Food"
    })
}

const addNewFood = function (req, res) {
    _renderCreatePage(req, res);
}

const doAddNewFood = function (req, res) {
    const path = '/api/foods';
    const postdata = {
        name: req.body.name,
        type: req.body.type
    };
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'POST',
        json: postdata
    };
    request(
        requestOptions,
        (err, response, body) => {
            if (response.statusCode === 201) {
                res.redirect('/');
            }
        }
    );
};


module.exports = {
    foodInfo,
    homelist,
    doAddNewFood,
    addNewFood

};