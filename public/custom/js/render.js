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
        $('#regionItems').on('click', 'li', function(){
            var selText = $(this).text();
            $('#dropdownRegion').text(selText);
            $('#region').val(selText);
            self.loader.loadCities(selText);
            $('#dropdownCity').prop('disabled', false);
            //disable previous actions
            _resetCitySelection();
        });
        $('#cityItems').on('click', 'li', function(){
            var selText = $(this).text();
            $('#dropdownCity').text(selText);
            $('#city').val(selText);
        });
        $('#modelItems').on('click', 'li', function(){
            var selText = $(this).text();
            $('#dropdownModel').text(selText);
            $('#model').val(selText);
        });

        $('form').submit(function(){
            var emptyInputs = $(this).find('input').filter(function(){
                return !$.trim(this.value).length;
            }).prop('disabled',true);
            var query = $('form').serialize();
            $.ajax({ type: 'GET', url: '/list?' + query, success: function(res){
                    alert(res);
                }
            });
            return false;
        });
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
