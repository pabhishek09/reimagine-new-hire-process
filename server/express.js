const   logger      = require('morgan'),
        bodyParser  = require("body-parser"),
        cookieParser= require('cookie-parser'),
        path        = require("path");

module.exports = function(app, express) {

    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());

    if (process.env.NODE_ENV === 'dev') {
        app.use(function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "http://localhost:8080");
            res.header("Access-Control-Allow-Credentials", "true");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, cookies");
            next();
        });
    }

    // Set the path for dist and public
    app.use('/', express.static(path.normalize(__dirname + '/../public')));
    app.use('/', express.static(path.normalize(__dirname + '/../dist')));

    // Set up database connection
    require('./database/db')(app);
    // Load Routes
    require('./routes/index')(app);
    
}
