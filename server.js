const express = require('express');
const bodyParser = require('body-parser');
var path = require('path');
const api = require('./api/index');
const app = express();
const port = process.env.PORT || 3030;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));
//app.use(express.static('static'));
/*
app.get('*', function (req, res) {
    //res.sendFile('./index.html');
});
*/
//api(app);
app.use('/api',api);

app.listen(port, function() {
    console.log('服务器运行在端口:'+port)
});

module.exports = app;
