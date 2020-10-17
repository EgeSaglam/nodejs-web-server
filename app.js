var express = require('express');
var middleware = require('./middleware');
var app = express();
var PORT = process.env.PORT || 3000;

app.use(middleware.logger);

app.get('/hakkimda', middleware.requireAutentication, function (req, res) {
    res.send('Hakkimda Sayfası');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
    console.log('Express server ' + PORT + 'unda baslatıldı');
})