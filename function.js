

$(document).ready(function(){
	$(".row-small-hide").hide();


		function searchPostInformation(winepost){
            var queryURL = "http://api.snooth.com/action/?akey=jpdcqrqgxv6sc3eao019dbtgne6wezij10hhbmmr1t76z5t8&ip=66.28.234.115&q=&n=15";
                $.ajax({
                    url:queryURL,
                    method:'GET'
                }).done(function(response){
                    parsed = JSON.parse(response);
                    console.log(parsed);
                    for (var i = 0; i < parsed.actions.length; i++){ 
                    var wellSection = $("<div>");
                        wellSection.addClass("well");
                        wellSection.attr("id", "post-well-");
                        console.log(wellSection);
                        $("#post-div").append(wellSection);
                      	$("#post-well-").append("<p>" + parsed.actions[i].date + "<p>");
                        $("#post-well-").append("<p>" + parsed.actions[i].grammar.subject_name + "<p>");
                        $("#post-well-").append("<p>" + parsed.actions[i].grammar.subject_blurb + "<p>");
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
