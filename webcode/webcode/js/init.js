//Hook up the tweet display

$(document).ready(function() {
                           
    $(".countdown").countdown({
                date: "26 April 2025 06:00:00",
                format: "on"
            },
            
            function() {
                // callback function
            });

}); 