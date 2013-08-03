
// Home
module.exports.home = function (req, res) {

	res.render('home', {
		active : 'home'
	});

};

// Example
module.exports.example = function (req, res) {

	res.render('example', {
		active : 'example'
	});

};

// Documentation
module.exports.documentation = function (req, res) {

	res.render('documentation', {
		active : 'documentation'
	});

};

// Credits
module.exports.credits = function (req, res) {

	res.render('credits', {
		active : 'credits'
	});

};