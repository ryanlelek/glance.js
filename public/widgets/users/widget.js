
function users_main () {

	// Update
	$.ajax({
		url: "/widgets/users",
		dataType: "json",
		data: {},
		success: function (body) {

			$("p#widget-users").html(body.data.count);

			// Do Again Soon
			var timeout = setTimeout(function () {
				users_main();
			}, 10000);

		}
	});

}

// Run
users_main();