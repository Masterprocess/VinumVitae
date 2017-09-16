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
                     var jsonWineString = wineInfo
                     var parsedJsonWineString = JSON.parse(jsonWineString)
                     var wine_NAME = parsedJsonWineString.name;
                     var wine_CODE = parsedJsonWineString.code;
                     var wine_LINK = parsedJsonWineString.link;
                     var wine_PRICE = parsedJsonWineString.price;
                     var wine_REGION = parsedJsonWineString.region;
                     var wine_RANK = parsedJsonWineString.snoothrank;
                     var wine_TYPE = parsedJsonWineString.type;
                     var wine_VARIETAL = parsedJsonWineString.varietal;
                     var wine_VINTAGE = parsedJsonWineString.vintage;
                     var wine_WINERY = parsedJsonWineString.winery;
                     var wine_WINERYID = parsedJsonWineString.winery_id;

                     console.log(wineInfo);

                     $("#userSelection").attr("value", wineInfo);
                     $("#wine-name").attr("value", wine_NAME);
                     $("#wine-code").attr("value", wine_CODE);
                     $("#wine-link").attr("value", wine_LINK);
                     $("#wine-price").attr("value", wine_PRICE);
                     $("#wine-region").attr("value", wine_REGION);
                     $("#wine-rank").attr("value", wine_RANK);
                     $("#wine-type").attr("value", wine_TYPE);
                     $("#wine-varietal").attr("value", wine_VARIETAL);
                     $("#wine-vintage").attr("value", wine_VINTAGE);
                     $("#wine-winery").attr("value", wine_WINERY);
                     $("#wine-wineryID").attr("value", wine_WINERYID);
                     
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


