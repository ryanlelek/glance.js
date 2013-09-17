
// Create Page
var page = require('webpage').create();

// Set Viewport
page.viewportSize = { width: 1920, height: 1080 };

// Load Page
page.open('http://localhost:8080/fullscreen', function () {

	// Save Screenshot
	page.render('Glancejs.1080p.png');

});