var http = require('http');
var url = process.argv[2];

http.get(url, (response) => {
    var str = '';

    response.on('data', (data) => {
        str = str + data.toString();
    });

    response.on('end', () => {
        console.log(str.length);
        console.log(str);
    })
})