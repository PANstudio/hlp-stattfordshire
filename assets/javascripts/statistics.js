$(document).ready(function(){

    $.getJSON("https://hello-lamp-post-api.herokuapp.com/locations/59", function(data){
        console.log(data);
        
    })

})