
// http://stackoverflow.com/questions/8888491/how-do-you-display-javascript-datetime-in-12-hour-am-pm-format
// http://www.datejs.com/
function clock_main () {

	// Update Clock
	$("span#widget-clock").html(new Date().toString("hh:mm tt"));

	// Run Again Soon
	var timeout = setTimeout(function () {
		clock_main();
	}, 1000);

}

// Start
clock_main();