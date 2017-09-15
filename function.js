

$(document).ready(function(){
	$(".row-small-hide").hide();


		function searchPostInformation(winepost){
            var queryURL = "http://api.snooth.com/action/?akey=jpdcqrqgxv6sc3eao019dbtgne6wezij10hhbmmr1t76z5t8&ip=66.28.234.115&q=&n=30";
                $.ajax({
                    url:queryURL,
                    method:'GET'
                }).done(function(response){
                    parsed = JSON.parse(response);
                    console.log(parsed);

                    for (var i = 0; i < parsed.actions.length; i++){ 
                        var testUnpopulated = parsed.actions[i].grammar.subject_blurb;
                        console.log(testUnpopulated);
                        if (typeof(parsed.actions[i].grammar.subject_blurb) != "undefined"){

                        console.log(parsed.actions[i].grammar.subject_blurb);
                        var wellSection = $("<div>");
                        wellSection.addClass("well");
                        wellSection.attr("id", "post-well-");
                        console.log(wellSection);
                        $("#post-div").append(wellSection);
                      	wellSection.append("<p>" + "Posted:  " + parsed.actions[i].date + "<p>");
                        wellSection.append("<p>" + "Wine Name:  " + parsed.actions[i].grammar.subject_name + "<p>");
                        wellSection.append("<p>" + "Rating From User:  " + parsed.actions[i].grammar.subject_rating + "<p>");
                        wellSection.append("<p>" + parsed.actions[i].grammar.subject_blurb + "<p>");
                        } // end if
	                   } //end for loop

            		});
            	}
            
            $("#select-posts").on("click", function(event){
                event.preventDefault();
                searchPostInformation();
                $(".row-small-hide").show();
                $("#post-div").empty();
            
            });

            $("#clear-posts").on("click", function(event){
                $("#post-div").empty();
                $(".row-small-hide").hide();

            });

        });
