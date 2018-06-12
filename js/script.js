$(function () {
    // URL VARIABLE
   var url = 'https://restcountries.eu/rest/v1/name/',
       countriesList = $('#countries'),
       capitalsList = $('#capitals');
    
    // SEARCH BUTTON
    $('#search').click(searchCountries);
    
    //SEARCH COUNTRIES BY USER INPUT
    function searchCountries() {
        var countryName = $('#country-name').val();
        
        if(!countryName.lenght) countryName='Poland';
    
        $ajax({
            url: url + countryName,
            method: 'GET',
            success: showCountriesList,
        });
    }
    
    // SHOWING RESULTS 
    function showCountriesList(resp) {
        countriesList.empty();
        capitalsList.empty();
        
        resp.forEach(function(item) {
            $('<li>').text(item.name).appendTo(countriesList);
            $('li').text(item.capital).appendTo(capitalsList);
        });
    }
});

