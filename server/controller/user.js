// User controller - This can be used to make all calls to the user model
const userModel = require('../model/user');

module.exports = {

    getuser: function(app) {
        return userModel.getuser(app);
    },

    createUser: function(app, body) {
        return userModel.createUser(app, body);
    }

}