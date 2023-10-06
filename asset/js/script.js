// Grab user's input at click and make an API call

$("#search").on("click",function(event){
    event.preventDefault();
    var searchButton = $(event.target);
    var searchQuery = searchButton.siblings().eq(0).children().eq(2).children().eq(1).val();
    searchButton.siblings().eq(0).children().eq(2).children().eq(1).val("");
    var formatOption = searchButton.siblings().eq(0).children().eq(1).val();
    if (searchQuery.length === 0){
        alert("Please add your input to the search.")
    } else {
        document.location.replace("/results.html?q=" + searchQuery + "&format=" + formatOption)
    }
    
});