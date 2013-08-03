
// Modules
var path	= require('path'),
	http	= require('http'),
	express	= require('express');

// New Express App
var app = express();

// Configure Environment - All
app.set('port', process.env.PORT || 8080);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// Configure Environment - Development
if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}

// Routes
var routes = require('./routes.js');
app.get('/', routes.home);
app.get('/example', routes.example);

// Start Server
http.createServer(app).listen(app.get('port'), function () {
	console.log('HTTP Server Running on port:', app.get('port'));
});