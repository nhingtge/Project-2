const url = "/api/datatable";
$(document).ready(function() {
        d3.json(url).then(function(response) {
    dataSet=response["results"]
    console.log(dataSet); 
        $('#myTable').DataTable( {
            data: dataSet,
            columns: [
                { title: "League" },
                { title: "Season" },
                { title: "Stage" },
                { title: "Player" },
                { title: "Team" },
                { title: "Games Played" },
                { title: "Minutes Played" },
                { title: "Field Goals" },
                { title: "Rebounds" },
                { title: "Assists" }
            ]
        } );
        console.log(response);    
    } );

  })