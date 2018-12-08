//module to convert from city name to coordinates (longitude and latitude)
//could not get the asynchronous part to work
//Only displays to console so far.

exports.coord = function (cityName) {
    var NodeGeocoder = require('node-geocoder');

    var options = {
        provider: 'mapquest',

        // Optional depending on the providers
        httpAdapter: 'http', // Default
        apiKey: 'nhn08oLV67L85qAvayu8jgqYJDynwZJd', // for Mapquest, OpenCage, Google Premier
        formatter: null         // 'gpx', 'string', ...
    };

    var geocoder = NodeGeocoder(options);

// Using callback
    geocoder.geocode(cityName, function(err, res) {
        console.log(res[0]);
    });

};