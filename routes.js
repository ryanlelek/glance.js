
var prepend_project_name = function (text) {
	return 'Glance.js - ' + text;
};

// Home
module.exports.home = function (req, res) {

	res.render('home', {
		active : 'home',
		title: prepend_project_name('Home')
	});

};

// Example
module.exports.example = function (req, res) {

	res.render('example', {
		active : 'example',
		title: prepend_project_name('Example')
	});

};

// Fullscreen
module.exports.fullscreen = function (req, res) {

	res.render('fullscreen', {
		active : 'fullscreen',
		title: prepend_project_name('Fullscreen')
	});

};

// Documentation
module.exports.documentation = function (req, res) {

	res.render('documentation', {
		active : 'documentation',
		title: prepend_project_name('Documentation')
	});

};

// Credits
module.exports.credits = function (req, res) {

	res.render('credits', {
		active : 'credits',
		title: prepend_project_name('Credits')
	});

};

// Widget - Users
var widget_user_count = 281;
module.exports.widget_users = function (req, res) {

	// Generate New User Count (Between 1 and 10)
	var addition = Math.floor(Math.random() * 10) + 1;

	// Update
	widget_user_count = widget_user_count + addition;

	// Send Fake Response
	res.send(200, {
		meta : {
			updated : 1234567890
		},
		data : {
			count : widget_user_count
		}
	});

};