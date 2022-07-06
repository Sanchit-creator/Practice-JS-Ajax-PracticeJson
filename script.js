$('button').click(function() {
    
    var xhrHttp = new XMLHttpRequest();
    xhrHttp.onload = function() {
        // to parse in string
        var responseJson = JSON.parse(xhrHttp.response);
        var imageUrl = responseJson.message;
        // to add in src attribute of image
        $('#dog-image').attr('src', imageUrl);

    };

    xhrHttp.onerror = function() {
        console.log('Request Failed');
    }

    // to get and send the request
    xhrHttp.open('get', 'https://dog.ceo/api/breeds/image/random', true);
    xhrHttp.send();

    //Using Ajax

    // $.ajax({
    //     url: 'https://dog.ceo/api/breeds/image/random',
    //     method: 'GET',
    //     success: function(data) {{
    //         var imageUrl = data.message;
    //         // to add in src attribute of image
    //         $('#dog-image').attr('src', imageUrl);
    //     }}
    // }).fail(function() {
    //     console.log('error');
    // })



    // Using more simple ajax

    // $.get('https://dog.ceo/api/breeds/image/random',  function(data) {
    //             var imageUrl = data.message;
    //             // to add in src attribute of image
    //             $('#dog-image').attr('src', imageUrl);
    //         }).fail(function(xhr, textStatus, errorThrown){
    //             console.log('Request Failed');
    //         })

})




