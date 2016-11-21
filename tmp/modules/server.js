/**
 * Created by dp on 2016/11/21.
 */

var http = require('http');
var url = require('url');

function start(route, handle) {
   http.createServer((req, res) => {
       var pathName = url.parse(req.url).pathname;
       console.log('Request for ' + pathName + ' received.');

       // var postData = '';
       // var pathName = url.parse(req.url).pathname;
       // console.log('Request for ' + pathName + ' Received.')
       //
       //  req.setEncoding('utf8');
       //  req.addListener('data', (postDataChunk) => {
       //      postData += postDataChunk;
       //      console.log('Received POST data chunk ' + postDataChunk + ' .');
       //  });
       //
       //  req.addListener('end', () => {
       //     route(handle, pathName, res, postData);
       //  });
       // res.writeHead(200, {'Content-Type': 'text/plain'});
      // res.write('Hello world!');
      //  var content = route(handle, pathName);
       route(handle, pathName, res, req);
   }).listen(3000);
   console.log('Server has started...');
}

exports.start = start;