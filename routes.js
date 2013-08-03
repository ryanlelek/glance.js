
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