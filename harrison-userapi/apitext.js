var userAPI =




    $.ajax({
        url: 'https://randomuser.me/api/',
        datatype: 'json',
        success: function (data) {
            console.log(data);
            $("body").append("<h1> My name is " + data.results[0].name.first + "<h1>");
            $("body").append("<h3> I'm from " + data.results[0].location.city + "<h3>");
            $("body").append("<h3> I am a " + data.results[0].gender + "<h3>");
            $("body").append("<h3> Hit me up at " + data.results[0].email + "<h3>");
        }
    });