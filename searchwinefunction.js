$(document).ready(function(){
    $(".row-small-hide").hide();
    $("#wineForm").hide();
    $(".tooManyMessage").hide();
    $(".noResults").hide();

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
                    console.log(parsed.meta.results);
                    //console.log("Parse wine length" + parsed.wines.length);
                    $(".tooManyMessage").hide();
                    $(".noResults").hide();

                    if(parsed.meta.results > 0) {
                        for (var i = 0; i < parsed.wines.length; i++)
                        {
                        wineCounter++;
                        console.log("winecount" + wineCounter);
                        if (wineCounter < 16)
                            {
                            var wellSection = $("<div>");
                            wellSection.addClass("well");
                            wellSection.attr("id", "wine-well-" + wineCounter);
                            wellSection.attr("wineInfo", JSON.stringify(parsed.wines[i]));
                            console.log(wellSection);
                            $("#wine-div").append(wellSection);
                            $("#wine-well-" + wineCounter)
                            .append("<p>" + parsed.wines[i].name + "<p>");
                            $("#wine-well-" + wineCounter)
                            .append("<p>" + parsed.wines[i].type + "<p>");
                            $("#wine-well-" + wineCounter)
                            .append("<p>" + parsed.wines[i].vintage + "<p>");
                            $("#wine-well-" + wineCounter)
                            .append("<p>" + parsed.wines[i].region + "<p>");
                            $("#wine-well-" + wineCounter)
                            .append("<p>" + parsed.wines[i].price + "<p>");

                            var picture = parsed.wines[i].image;
                            var wineImageContain = $("<div>");
                            wineImageContain.addClass("wineimage");
                            var wineImage = $("<img>");
                            wineImageContain.append(wineImage);
                            wineImage.attr("src", picture);
                            $("#wine-well-" + wineCounter)
                            .append(wineImageContain);
                            }

                        if (wineCounter > 15)
                            {
                            $("#wine-div").empty();
                            $(".noResults").hide();
                            $(".row-small-hide").hide();
                            $(".tooManyMessage").show();
                            //document.getElementById("panelchange").innerHTML = "Narrow"
                            //alert("Try to narrow your search - too many results");
                            wineCounter = 0;
                            }
                        }
                        }
                        else 
                        {
                         $(".row-small-hide").hide();
                         $(".tooManyMessage").hide();
                         $(".noResults").show();
                        }

                    $(".well").click(function(event){
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


