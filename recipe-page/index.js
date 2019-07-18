$(document).ready(function() {
    function rgb2hex(rgb){
        rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
        return (rgb && rgb.length === 4) ? "#" +
         ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
         ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
         ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
       }

    $("button").click(function() {
        var bgcolor = $(".instructions").css("background-color");
        console.log(bgcolor);
        var bgcolorHex = rgb2hex(bgcolor);
        console.log(bgcolorHex);
        if(bgcolorHex.toLowerCase() === "#ffb6b9"){
            $(".instructions").css("background-color","#ffffff"); 
        } else {
            $(".instructions").css("background-color","#ffb6b9"); 
        }
    });
});






