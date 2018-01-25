module.exports = {

    getuser: (app) => {
        const db = app.get('db');
        return 'DB Received';
    },

    createUser: (app, body) => {
        const db = app.get('db');
        console.log('User created for: ', body);
        return 'User created';
    }
}