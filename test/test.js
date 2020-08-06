const http = require('http');
const qs = require('querystring');
const url = require('url');
const fs = require('fs');
const path = require('path');
const template = require('../js/template.js');
const weight = require('../js/weight.js');


const app = http.createServer(function(req, res){
    var _url = req.url;
    var _pathName = url.parse(_url,true).pathname;
    const mimeType = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css'
    };

    const _ext = path.parse(_url).ext;
    const _staticPath = path.join(__dirname, './static');

    if (Object.keys(mimeType).includes(_ext)){
        fs.readFile(`${_staticPath}${url}`, function(err,data){
            res.setHeader('Content-Type', mimeType[_ext]);
            res.statusCode = 200;
            res.end(data);
        })
    }
    
    var html = template;
    res.writeHead(200);
    res.end(html);
});
app.listen(4646);