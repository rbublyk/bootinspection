var ViewRender = (function($){

    var ViewRender = function() {
        this.loader = new Loader();
    }

    ViewRender.prototype.init = function(){
        this.loader.loadCountries();
        this.loader.loadModels();
        $('#datetimepickerFrom').datetimepicker();
        $('#datetimepickerTo').datetimepicker();
    }

    ViewRender.prototype.listen = function(){
        var self = this;
        // listener for countries
        $('#countryItems').on('click', 'li', function(){
            var selText = $(this).text();
            $('#dropdownCountry').text(selText);
            $('#country').val(selText);
            self.loader.loadRegions(selText);
            $('#dropdownRegion').prop('disabled', false);
            $('#submitForm').prop('disabled', false);
            //disable previous actions
            _resetRegionCitySelection();
        });
        // listener for regions
        $('#regionItems').on('click', 'li', function(){
            var selText = $(this).text();
            $('#dropdownRegion').text(selText);
            $('#region').val(selText);
            self.loader.loadCities(selText);
            $('#dropdownCity').prop('disabled', false);
            //disable previous actions
            _resetCitySelection();
        });
        // listener for cities
        $('#cityItems').on('click', 'li', function(){
            var selText = $(this).text();
            $('#dropdownCity').text(selText);
            $('#city').val(selText);
        });
        // listener for models
        $('#modelItems').on('click', 'li', function(){
            var selText = $(this).text();
            $('#dropdownModel').text(selText);
            $('#model').val(selText);
        });
        // listener for submit form
        $('form').submit(function(){
            // disable empty inputs for clean form submit
            var emptyInputs = $(this).find('input').filter(function(){
                return !$.trim(this.value).length;
            }).prop('disabled',true);
            $('table tbody').empty();
            // serialize form inputs to string
            var query = $('form').serialize();
            // call server for boot list
            $.ajax({ type: 'GET', url: '/list?' + query, success: function(res){
                    _buildTable('table tbody', res);
                }
            });
            // enable inputs
            var inputs = $(this).find('input').prop('disabled', false);
            // false for disable button submit
            return false;
        });
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
        //return container.append(table);
    }


    function _resetRegionCitySelection(){
        $('#regionItems').empty();
        $('#cityItems').empty();
        $('#region').val('');
        $('#dropdownRegion').text('Choose Region').append(' <span class="caret"></span>');
        $('#city').val('');
        $('#dropdownCity').text('Choose City').append(' <span class="caret"></span>');
    }

    function _resetCitySelection(){
        $('#cityItems').empty();
        $('#city').val('');
        $('#dropdownCity').text('Choose City').append(' <span class="caret"></span>');
    }

    return ViewRender;
})(jQuery);
