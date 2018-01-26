const mongodb     = require("mongodb");

module.exports = function(app) {
    mongodb.MongoClient.connect(process.env.MONGODB_URI, function (err, database) {
        if (err) {
            console.log(err);
            process.exit(1);
        } else {
            const db = database;
            // Creating the database instance at the app level which can be used for db transactions
            app.set('db', db);
            console.log("Database connection ready");
        }    
    });
}
