const url = "/api/datatable";
  d3.json(url).then(function(response) {
    dataSet=response["results"]
    $(document).ready(function() {
        $('#myTable').DataTable( {
            data: dataSet,
            columns: [
                { title: "Leauge" },
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
    } );
    console.log(response);
  })