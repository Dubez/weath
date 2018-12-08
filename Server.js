var http = require('http');
var url  = require('url');
var fs = require('fs');
var citytocoord = require('./citytocoord.js');
var citytemp = require('./citytemp');
//var request = require('request');

var querystring = require('querystring');


function processPost(request, response, callback) {
    var queryData = "";
    if(typeof callback !== 'function') return null;

    if(request.method == 'POST') {
        request.on('data', function(data) {
            queryData += data;
            if(queryData.length > 1e6) {
                queryData = "";
                response.writeHead(413, {'Content-Type': 'text/plain'}).end();
                request.connection.destroy();
            }
        });

        request.on('end', function() {
            request.post = querystring.parse(queryData);
            callback();
        });

    } else {
        response.writeHead(405, {'Content-Type': 'text/plain'});
        response.end();
    }
}


http.createServer(function (req, res) {
    var q = String(url.parse(req.url, true).path);

    var p = q.slice(1);
    res.writeHead(200, {'Content-Type':'text/html'});
    if(p == ""){
        p = 'index.html';
    }

    fs.readFile(p, function (err, data) {

        res.write(data);

    });

    if(req.method == 'POST') {

        processPost(req, res, function () {
            console.log(req.post);
            if (p == 'index.html') {
                res.write(citytemp.weathfc(req.post));
            } else if (p == 'coord.html') {
                res.write(citytocoord.coord(req.post));
            }
        })
    }

    //res.end();
}).listen(8081);
