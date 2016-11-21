/**
 * Created by dp on 2016/11/21.
 */

function route(handle, pathName, res) {
    console.log('About to route a request for ' + pathName);
    if(typeof handle[pathName] === 'function'){
        handle[pathName](res);
    }else{
        console.log('No request handler found for' + pathName);
        res.writeHead(404, {'Content-Type': 'test/plain'});
        res.write('404 Not Found');
        res.end();
    }
}

exports.route = route;