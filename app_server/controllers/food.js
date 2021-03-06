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

module.exports = {
    foodInfo,
    homelist

};