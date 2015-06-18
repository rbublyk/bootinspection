var path    = require("path");

exports.home = function (req, res){
    res.sendFile(path.resolve(__dirname + '/../views/home.html'));
}

exports.getCountries = function(req, res){
    res.json([ 'Finland', 'Ukraine', 'USA' ]);
}

exports.getRegions = function(req, res){
    var country = req.query.country;
    // You should return regions of the selected country
    res.json([ 'Syms\'kii', 'Kharkivs\'kii', 'Kyivs\'kii' ]);
}

exports.getCities = function(req, res){
    var region = req.query.region;
    // You should return cities of the selected region
    res.json([ 'Sumy', 'Kharkiv', 'Kyiv' ]);
}

exports.getModels = function(req, res){
    res.json([ 'HT-230', 'HD-5500', 'DK-123' ]);
}

exports.getList = function (req, res) {
    var query = {
        country: req.query.country,
        city: req.query.city,
        model: req.query.model,
        fromDate: req.query.fromDate,
        toDate: req.query.toDate
    };
    console.log(query);
    // you can send it like this
    res.json([{ model: 'Asus', location: 'Finland', date: '2015-02-12', numBoots: 5}, { model: 'Asus', location: 'Finland', date: '2015-02-12', numBoots: 5}, { model: 'Asus', location: 'Finland', date: '2015-02-12', numBoots: 5}]);
    // or you can send it like this
    //res.json([['Asus', 'Finland', '2015-02-12', 5], ['Asus', 'Finland', '2015-02-12', 5], ['Asus', 'Finland', '2015-02-12', 5]]);
}
