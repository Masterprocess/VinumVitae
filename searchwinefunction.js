$(document).ready(function(){
    $(".row-small-hide").hide();

        var wineCounter = 0;
        finalWineSelection = [];
        var wineName;
        var wineType;
        var wineVintage;
        var wineRegion;

        function searchWineInformation(wine){
            var queryURL = "http://api.snooth.com/wines/?akey=jpdcqrqgxv6sc3eao019dbtgne6wezij10hhbmmr1t76z5t8&ip=66.28.234.115&q=" + wine + "&n=20";
                $.ajax({
                    url:queryURL,
                    method:'GET'
                }).done(function(response){
                    parsed = JSON.parse(response);
                    console.log(parsed);
                    for (var i = 0; i < parsed.wines.length; i++){
                        wineCounter++;
                        console.log(wineCounter);
                        if (wineCounter < 16)
                        {

                            var wellSection = $("<div>");
                            
                          
                            wellSection.addClass("well");
                            wellSection.attr("id", "wine-well-" + wineCounter);
                            wellSection.attr("wineInfo", JSON.stringify(parsed.wines[i]));
                            //wellSection.attr("src", parsed.wines[i].image);
                            console.log(wellSection);
                            $("#wine-div").append(wellSection);

                        $("#wine-well-" + wineCounter)
                        .append("<p>" + parsed.wines[i].name + "<p>");
                        // //console.log("wine name" + parsed.wines[i].name);
                        $("#wine-well-" + wineCounter)
                        .append("<p>" + parsed.wines[i].type + "<p>");
                        // //console.log("wine name" + parsed.wines[i].type);
                        $("#wine-well-" + wineCounter)
                        .append("<p>" + parsed.wines[i].vintage + "<p>");
                        // //console.log("wine name" + parsed.wines[i].vintage);
                        $("#wine-well-" + wineCounter)
                        .append("<p>" + parsed.wines[i].region + "<p>");
                        // //console.log("wine name" + parsed.wines[i].region);
                        $("#wine-well-" + wineCounter)
                        .append("<p>" + parsed.wines[i].price + "<p>");
                        //console.log("wine name" + parsed.wines[i].price);
                        var picture = parsed.wines[i].image;
                        $("#wine-well-")
                        .append("img-src", picture);
                    }

                    if (wineCounter > 15)
                    {
                        alert("Try to narrow your search - too many results");
                        wineCounter = 0;

                    }


                    }
                    $(".well").click(function(event){
                    console.log("hi");
                     event.preventDefault();
                     var wineInfo = $(this).attr("wineInfo");
                     console.log(wineInfo);
                     $("#userSelection").attr("value", wineInfo);
                     $("#wineForm").submit();
                     
            });
                 
            });
            }
            

            
            
            $("#select-wine").on("click", function(event){
                event.preventDefault();
                var wine = $("#wine-input").val().trim();
                searchWineInformation(wine);
                $(".row-small-hide").show();
                $("#wine-div").empty();
            
            });

            $("#clear-wine").on("click", function(event){
                 wineCounter=0;
                $("#wine-div").empty();
                $(".row-small-hide").hide();
            });
           });

   


