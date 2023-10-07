// var saveButton = document.getElementById("save");
// saveButton.addEventListener("click", function(event) {
// 	event.preventDefault();
    
// }

function getSearchQuery() {
    var queryResult = document.location.search;
    console.log("queryResult:", queryResult);

    if (queryResult) {
        getSearchResults(queryResult);
    } else {
        // If no result, go back to main page
        document.location.replace("./index.html");
    }
}

function getSearchResults(queryResult) {

    // https://www.loc.gov/film-and-videos/?q=dog&fo=json
    // https://www.loc.gov//{format}/?fo=json
    // https://www.loc.gov/?q=basketball&fo=json&/audio

    var format = "audio";
    var query = "basketball";
    var requestUrl = "https://www.loc.gov/search/?fo=json&q="+ query + "/format";
    var thing;
    fetch(requestUrl)
        .then(function(response) {
            console.log('return response is'+ response)
            return response.json();
        }).then(function(data){
            console.log("data received is "+ data );
            console.log(requestUrl);
            thing = data;
            
            for (var i = 0; i < 2; i++) {
                var title = data.results[i].title;
                var date = data.results[i].date;
                var description = data.results[i].description[0];

                console.log("title:", title, "date:", date, "description:", description);
            }

        })
}

$(function() {
    getSearchQuery()
});

// Add eventlistner to the search botton
$("#search").on("click",function(event) {
    event.preventDefault();
    var searchedTerm = $("input").val();
    var selectedFormat = $("#format").val();
    var requestUrl = "https://www.loc.gov/search/" + selectedFormat +"?fo=json&q="+ searchedTerm;
    var thing;
    fetch(requestUrl)
        .then(function(response) {
            console.log('return response is'+ response)
            return response.json();
        }).then(function(data){
            console.log("data received is "+ data );
            console.log(requestUrl);
            thing = data;
            
            for (var i = 0; i < 2; i++) {
                var title = data.results[i].title;
                var date = data.results[i].date;
                var description = data.results[i].description[0];

                console.log("title:", title, "date:", date, "description:", description);
            }

        })
});



// function getApi() {
    
//     var requestUrl = 'https://api.github.com/orgs/nodejs/repos';
//     var thing;
//     fetch(requestUrl)
//       .then(function (response) {
//         console.log("response", response)
//         return response.json();
//       })
//       .then(function (data) {
//         console.log("data",data)
//         thing = data
//         for (var i = 0; i < data.length; i++) {
//           var createTableRow = document.createElement('tr');
//           var tableData = document.createElement('td');
//           var link = document.createElement('a');
  
//           // Setting the text of link and the href of the link
//           console.log(data[i].html_url);
//           link.textContent = data[i].html_url;
//           link.href = data[i].html_url;
  
          
//           tableData.appendChild(link);
//           createTableRow.appendChild(tableData);
//           tableBody.appendChild(createTableRow);
     
//         }
//       }).catch(function(err){
//         console.log(err);
//       });
//       console.log("Meow");
//       console.log(thing);
//   }
  
//   fetchButton.addEventListener('click', getApi);
  

