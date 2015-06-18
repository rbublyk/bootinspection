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

    Loader.prototype.loadList = function(){
        // serialize form inputs to string
        var query = $('form').serialize();
        $.ajax({ type: 'GET', url: '/list?' + query, success: function(data){
            if(data){
                return _buildTable('table tbody', data);
            }
            return false;
        }});
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

    function _buildTable(container, data){
        //var table = $("<table/>").addClass('table').addClass('table-stripped');
        var table = $(container);
        $.each(data, function(rowIndex, r) {
            var row = $("<tr/>");
            $.each(r, function(colIndex, c) {
                // row.append($("<t"+(rowIndex == 0 ?  "h" : "d")+"/>").text(c));
                row.append($("<td/>").text(c));
            });
            table.append(row);
        });
        return true;
        //return container.append(table);
    }

    return Loader;
})(jQuery);
