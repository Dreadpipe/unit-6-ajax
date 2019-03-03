// GIPHY WARRIORS!
// Document ready goes here
// CHANGE ALL VARS TO LETS/CONST
$(document).ready(function() {
// STEP ONE: I need an array that stores strings of "things I like"

// I need a for loop that cycles through my array

// I need to append the array to buttons

// STEP TWO: I need an on click event for the buttons
$("#hero-button").on("click", function() {

    // this is the API URL, stored in a variable, which we'll use to call this API later
    // must be SPECIFICALLY catered to your needs
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + hero + "&api_key=e5k3DBOsJmADSoZFSu9EOG0ML89Tz2m3&limit=10";
    var hero =  $(this).attr("data-hero");

    // this is the ajax function that is getting data from the source
    $.ajax({
        url: queryURL,
        method: "GET"
    })
// I need the event to access the Giphy API
        .then(function(response) {

            var imageUrl = response.data.image_original_url;

            var heroImage = $("<img>");
// I need to append the data returned as gifs to the HTML
// I need the gifs to appear in a maximum of 10 results (alter queryURL)
            heroImage.attr("src", imageUrl);
            heroImage.attr("alt", "hero image");
            // adding class to effect all images
            heroImage.attr("class", ".gif")

            $("#images").prepend(heroImage);
        });
    //ends the on-click event
    });
// I need the gifs to REPLACE each other as the button is clicked

// I need the gifs to respond to clicks, in that they animate or still
    $(".gif").on("click", function() {
        var state = $(this).attr("data-state");
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        }
        else {

            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    });
// I need the form/submit button to receive input

// I need the input to be appended to a new button in the row of buttons

// This ends my script/document ready function.
});