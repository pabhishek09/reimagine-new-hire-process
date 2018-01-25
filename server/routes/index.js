// This is the base routing file which imports all the other files
module.exports = function(app) {
    require('./loadAngular')(app);
    require('./user')(app);
}