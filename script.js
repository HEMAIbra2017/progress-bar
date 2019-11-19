$(document).ready(function() {
    $(".my-progress-bar").circularProgress({
        line_width: 6,
        color: "#0ff",
        starting_position: 0, 
        percent: 0, 
        percentage: true,
       
    }).circularProgress('animate', 100, 3000);
});
