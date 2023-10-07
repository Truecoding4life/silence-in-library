// var saveButton = document.getElementById("save");
// saveButton.addEventListener("click", function(event) {
// 	event.preventDefault();
    
// }

function getSearchQuery() {
    var queryResult = document.location.search;
    console.log("queryResult:", queryResult);
    getSearchResults(queryResult);
    // if (queryResult) {
    //     getSearchResults(queryResult);
    // } else {
    //     // If no result, go back to main page
    //     document.location.replace("./index.html");
    // }
}

function getSearchResults(queryResult) {

    // https://www.loc.gov/?q=dog&fo=json
    // https://www.loc.gov//{format}/?fo=json
    // https://www.loc.gov/?q=basketball&fo=json&/audio
    // ?q=asdf&format=audio
    // ?q=asdf&

    var split1 = queryResult.split("format=");
    // console.log("split1:", split1);
    var split2 = split1[0].split("=");
    // console.log("split2:", split2);
    var split3 = split2[1].split("&");
    // console.log("split3:", split3)

    var format = split1[1];
    var query = split3[0];
    console.log("format:", format, "query:", query);
    search(query, format);
}

function search(query, format) {
    var requestUrl = "https://www.loc.gov/search/" + format +"?fo=json&q="+ query;
    var thing;
    fetch(requestUrl)
        .then(function(response) {
            // console.log('return response is'+ response)
            return response.json();
        }).then(function(data){
            // console.log("data received is "+ data );
            console.log(requestUrl);
            thing = data;
            
            $("#search-result").text(query.split("%20").join(" "));
            $("#results-list").text("");
            for (var i = 0; i < 10; i++) {
                var title = data.results[i].title;
                var date = data.results[i].date;
                if (data.results[i].description[0]) {
                    description = data.results[i].description[0];
                }

                var card = $('<div class="card"></div');
                var cardHeader = $('<h2 class="card-header"></h2>');
                cardHeader.text(title);
                var cardDate = $('<p class="card-body"></p>');
                cardDate.text(date);
                var cardDescription = $('<p class="card-body"></p>');
                cardDescription.text(description);

                card.append(cardHeader, cardDate, cardDescription);
                $("#results-list").append(card);

                // console.log("title:", title, "date:", date, "description:", description);
            }

        })
}

$(function() {
    getSearchQuery()
});

$("#back").on("click", function(event) {
    event.stopPropagation();
    event.preventDefault();

    document.location.replace("./index.html");
})

// Add eventlistner to the search botton
$("#search").on("click",function(event) {
    event.preventDefault();
    var query = $("input").val();
    var format = $("#format").val();
    
    search(query, format);

    // Clear the variables
    $("input").val("");
    $("#format").val("");
});



