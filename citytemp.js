//file to house the code for our application
//data gotten from darksky
exports.weathfc = function (cityName) {

    var request = require('request');
    var citytocoord = require('./citytocoord');


    var apiKey = '546237cc0d5c7c7e2d4603a679df65d3';
    var latitude = (citytocoord.coord(cityName))[0].latitude;
    var longitude = (citytocoord.coord(cityName))[0].longitude;
    var url = 'https://api.darksky.net/forecast/'+ String(apiKey) + '/' + String(latitude) + ',' + String(longitude);

    request(url, function (err, response, body) {
        if (err) {
            console.log('error: ', error);
        } else {
            return response;
        }

    });
};

