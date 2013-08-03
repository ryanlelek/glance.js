
var prepend_project_name = function (text) {
	return 'Glance.js - ' + text;
}

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