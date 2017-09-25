


$(document).ready(function() {
    // Toggle Single Bibtex entry
    $('a.papercite_toggle').click(function() {
	$( "#" + $(this).attr("id") + "_block" ).toggle();
	return false;
    });
});
