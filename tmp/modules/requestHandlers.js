/**
 * Created by dp on 2016/11/21.
 */

var exec = require('child_process').exec;

function start(res) {
    console.log('Request handler `start` was called.')

    function sleep(millSeconds) {
        var startTime = new Date().getTime();
        while (new Date().getTime() < startTime + millSeconds);
    }

    // sleep(10000);

    exec('ls -alh', (error, stdout, stderr) => {
       res.writeHead(200, {'Content-Type': 'text/plain'});
       res.write(stdout);
       res.end();
    });
}

function upload(res) {
    console.log('Request handler `upload` was called.')
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello upload!')
    res.end();
}

exports.start = start;
exports.upload = upload;