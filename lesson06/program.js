
var myModule = require('./mymodule');

var arg1 = process.argv[2]
var arg2 = process.argv[3]

myModule(arg1, arg2, function(err, list) {
    if (err) {
        return console.error(err);
    }

    list.forEach(function(file) {
        console.log(file);
    });
})


