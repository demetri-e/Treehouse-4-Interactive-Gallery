//Search 

	$(function () {
	    $("#search").keyup(function () {
	        // Retrieve the input field text and reset the count to zero
	        var filter = $(this).val(),
	            count = 0;
	        // Loop through the menu list
	        $("#image-list .img-search").each(function () {
	            // If the list item does not contain the text phrase fade it out
	            if ($(this).attr("data-title").search(new RegExp(filter, "i")) < 0) {
	                $(this).fadeOut();
	                // Show the list item if the phrase matches and increase the count by 1
	            } else {
	                $(this).show();
	                count++;
	            }
	        });
	        // Update the count
	        if (count > 0) {
	            $("#filter-count").text("Top " + count + " results for: " + filter);
	        } else {
	            $("#filter-count").text("No results for: " + filter);
	        }
	        if (filter == "") {
	            $("#filter-count").text("")
	        }
	    });
	});




