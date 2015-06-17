var path    = require("path");

exports.home = function (req, res){
    res.sendFile(path.resolve(__dirname + '/../views/home.html'));
}

exports.getCountries = function(req, res){
    res.json({ countries: [ 'Finland', 'Ukraine', 'USA' ] });
}

exports.getRegions = function(req, res){
    var country = req.query.country;
    // You should return regions of the selected country
    res.json({ regions: [ 'Syms\'kii', 'Kharkivs\'kii', 'Kyivs\'kii' ] });
}

exports.getCities = function(req, res){
    var region = req.query.region;
    // You should return cities of the selected region
    res.json({ cities: [ 'Sumy', 'Kharkiv', 'Kyiv' ] });
}

exports.getModels = function(req, res){
    res.json({ models: [ 'HT-230', 'HD-5500', 'DK-123' ] });
}

exports.list = function (req, res) {
    res.json({name: 'test'});
}
