$(function () {
    $('#heading').hide();
    $('#movies').hide();
    $('#srch_btn').click(function() {

        $('.res').remove();
        var title = $('#title').val();
        var $movies = $('#movies');

        $.ajax({
            type: 'GET',
            url: 'http://www.omdbapi.com/?s='+title,
            success: function(obj) {
                $.each(obj, function(i, arr) {
                    /* iterate through array or object */

                    if(jQuery.type(arr) == "array") {
                        $('#heading').show();
                        $('#movies').show();

                        $.each(arr, function(j, movie) {
                           /* iterate through array or object */
                           if(movie.Poster == "N/A")
                                movie.Poster = "img/image-not-available.png";
                           $movies.append('<div class="row res">'+
                            '<div class="col-md-2 col-md-offset-1"><img src="'+ movie.Poster +'" ></div>'+
                            '<div class="col-md-2">'+ movie.Title +'</div>'+
                            '<div class="col-md-2">'+ movie.Year.substr(0,4) +'</div>'+
                            '<div class="col-md-2">'+ movie.Type +'</div>'+
                            '<div class="col-md-2">'+ movie.imdbID +'</div>'+'</div>');
                        });
                    }
                    
                });
            }
        });
    });
});