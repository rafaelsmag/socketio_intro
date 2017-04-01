module.exports = app => {
    return {
        index: (req, res) => {
            return res.render('index', { title: 'Express' });
        }
    }
}