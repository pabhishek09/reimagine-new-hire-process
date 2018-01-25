module.exports = function(app) {
    app.get('/user', (req, res) => {
        res.send('user route loaded');
    })
}