/**
 * Created by dp on 2016/11/21.
 */

var exec = require('child_process').exec;
var querystring = require('querystring'),
    fs = require('fs'),
    mv = require('mv'),
    formidable = require('formidable');

function start(res, req) {
    console.log('Request handler `start` was called.')

    function sleep(millSeconds) {
        var startTime = new Date().getTime();
        while (new Date().getTime() < startTime + millSeconds);
    }

    // sleep(10000);

    /*exec('ls -alh', (error, stdout, stderr) => {
       res.writeHead(200, {'Content-Type': 'text/plain'});
       res.write(stdout);
       res.end();
    });*/

    var body = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" content="text/html; '+
        'charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" enctype="multipart/form-data"  method="post">'+
        '<input type="file" name="upload" rows="20" cols="60"></input>'+
        '<input type="submit" value="Upload" />'+
        '</form>'+
        '</body>'+
        '</html>';

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(body);
    res.end();
}

function upload(res, req) {
    console.log('Request handler `upload` was called.')
    // res.writeHead(200, {'Content-Type': 'text/plain'});
    // res.write('You\'ve sent: ' + querystring.parse(postData).text);
    // res.end();

    var form = new formidable.IncomingForm();
    console.log('about to parse');
    form.parse(req, (error, fields, files) => {
       console.log('parsing done.');
       // fs.renameSync(files.upload.path, '/tmp/test.png');
        mv(files.upload.path, '/tmp/test.png', function(err) {
            if (err) { throw err; }
            console.log('file moved successfully');
        });
       res.writeHead(200, {'Content-Type': 'text/html'});
       res.write('received image: <br/>');
       res.write('<img src="/show"/>');
       res.end();
    });
}

function show(res, req) {
    console.log('Request handler `show` was called.');
    fs.readFile('/tmp/test.png', 'binary', (error, file) => {
       if(error){
           res.writeHead(500, {'Content-Type': 'text/plain'});
           res.write(error + '\n');
           res.end();
       } else {
           res.writeHead(200, {'Content-Type': 'image/png'});
           res.write(file, 'binary');
           res.end();
        }
    });
}

exports.start = start;
exports.upload = upload;
exports.show = show;