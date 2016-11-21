/**
 * Created by dp on 2016/11/21.
 */

var http = require('http')

function start() {
   http.createServer((req, res) => {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write('Hello world!');
      res.end();
   }).listen(3000);
   console.log('Server has started...');
}

exports.start = start;