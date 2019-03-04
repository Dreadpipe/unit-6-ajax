// GIPHY WARRIORS!
// Document ready goes here
// CHANGE ALL VARS TO LETS/CONST
$(document).ready(function() {
// STEP ONE: I need an array that stores strings of "things I like"
    let topics = [
        "Solaire",
        "King Arthur",
        "Joan of Arc",
        "Black Knight",
        "Dragoon",
        "Knight Errant"
    ]
    // This function creates buttons
    function renderButtons() {
        $("#buttons").empty();
        // I need to append the array to buttons
        // I need a for loop that cycles through my array
    for (var i = 0; i < topics.length; i++) {
        var a = $("<button>");
        // added .topic class for later functionality 
        // I feel like all of this could be optimized
        a.attr("type", "button");
        a.addClass("topic btn btn-dark");
        a.attr("data-topic", topics[i]);
        // adds bootstrap types 
        a.text(topics[i]);
        $("#buttons").append(a);
    }
    }
    


// STEP TWO: I need an on click event for the buttons
$(document).on("click", ".topic", function() {
    
    // this is the API URL, stored in a variable, which we'll use to call this API later
    // must be SPECIFICALLY catered to your needs
    var topic =  $(this).attr("data-topic");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=e5k3DBOsJmADSoZFSu9EOG0ML89Tz2m3&q=" + topic + "&limit=10&offset=4&lang=en";
    console.log(queryURL)
    

    // this is the ajax function that is getting data from the source
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        //this returns the API promise
        .then(function(response) {
            // a variable shortcut that I will jam in a for loop
            var results = response.data; 
            
            for (var i = 0; i < results.length; i++) {
                //console.log(results[i].images.fixed_height.url)
            
                
                var gifDiv = $("<div>").attr("id", "gifs");
                var topicImage = $("<img>").attr("src", results[i].images.fixed_height_still.url);
                topicImage.attr("data-still", results[i].images.fixed_height_still.url);
                topicImage.attr("data-animate", results[i].images.fixed_height.url);
                topicImage.attr("data-state", "still");
                topicImage.attr("class", "gif");
                

                $("#images").prepend(gifDiv);
                gifDiv.append(topicImage);
                var rating = results[i].rating;
                    pRating = $("<p>").text("Rated: " + rating);
                    console.log(rating);
                //need to add ratings
                gifDiv.append(pRating);

                //use p tags?
            }

        });
    //ends the on-click event
    });
// I need the gifs to REPLACE each other as the button is clicked

// STEP THREE: I need the gifs to respond to clicks, in that they animate or still
    $(document).on("click", ".gif", function() {
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
// use id "#add-topic" and "topic-input"
    $("#add-topic").on("click", function(event) {
        event.preventDefault();

        var newTopic = $("#topic-input")
    })

// I need the input to be appended to a new button in the row of buttons
// I need to call my button function both in and out of function
// IN - to create new button, OUT - to create initial buttons
    renderButtons();
// This ends my script/document ready function.
});