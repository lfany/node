/**
 * Created by dp on 2016/11/21.
 */

var exec = require('child_process').exec;

function start() {
    console.log('Request handler `start` was called.')

    function sleep(millSeconds) {
        var startTime = new Date().getTime();
        while (new Date().getTime() < startTime + millSeconds);
    }

    sleep(10000);
    var content = 'empty';

    exec('ls -alh', (error, stdout, stderr) => {
       content = stdout;
    });
    return content;
}

function upload() {
    console.log('Request handler `upload` was called.')
    return 'Hello Upload';
}

exports.start = start;
exports.upload = upload;