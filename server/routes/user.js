module.exports = function(app) {
    
    var user = require('../controller/user');
    
    app.get('/user', (req, res) => {  
        res.send(user.getuser(app));
    });

    app.post('/user', (req, res) => {
        res.send(user.createUser(app, req.body));
    });
}