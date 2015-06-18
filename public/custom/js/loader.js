var Loader = (function($){

    var Loader = function(){}

    Loader.prototype.loadCountries = function(){
        $.getJSON('/countries', function(countries){
            if(countries){
                return _populateOptions(countries, '#countryItems');
            }
            return false;
        });
    }

    Loader.prototype.loadRegions = function(country){
        $.getJSON('/regions', { country: country }, function(regions){
            if(regions){
                return _populateOptions(regions, '#regionItems');
            }
            return false;
        });
    }

    Loader.prototype.loadCities = function(region){
        $.getJSON('/cities', { region: region }, function(cities){
            if(cities){
                return _populateOptions(cities, '#cityItems');
            }
            return false;
        });
    }

    Loader.prototype.loadModels = function(){
        $.getJSON('/models', function(models){
            if(models){
                return _populateOptions(models, '#modelItems');
            }
            return false;
        });
    }

    function _populateOptions(items, appendId){
        var parent = $(appendId);
        var options = '';
        $.each(items, function(index, item){
            options += '<li><a href="#">' + item + '</a></li>';
        });
        parent.append(options);
        return true;
    }

    return Loader;
})(jQuery);
