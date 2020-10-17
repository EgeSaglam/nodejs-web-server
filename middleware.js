var middleWare = {
    requireAutentication: function (req, res, next) {
        console.log('Ozel route girildi');
        next();
    },
    logger: function (req, res, next) {
        console.log(req.method + ' ' + req.orginalUrl);
        next();
    }
}

module.exports = middleWare;