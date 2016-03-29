'use strict';

const Promise = require('bluebird');
const rp = Promise.promisify(require('request'));

const result = rp({
    uri: 'http://jsonplaceholder.typicode.com/users',
    json: true
}).then(function(res){
    console.log(res.body.length);
    return res.body;
});
console.log(result);

module.exports = {
    context: {
        users: result
    }
}
