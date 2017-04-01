module.exports = app => {

    const model = app.model.user;
    const service = require('../service/crud')(model);

    return {
        index: (req, res) => {
            service.list().then((result) => {
                return res.render('users/index', { data: result.data });
            });
        },
        add: (req, res) => {
            if (req.method === 'POST') {
                service.insert(req.body).then(() => {
                    return res.redirect('/users');
                })
                    .catch(err => {
                        return res.json(err);
                    });
            } else {

                return res.render('users/add');

            }
        },
        view: (req, res) => {
            service.get(req.params.id).then((result) => {
                return res.render('users/view', { data: result.data });
            }).catch(err => {
                return res.send(404, 'Page not found');
            });
        },
        remove: (req, res) => {
            service.delete(req.params.id).then((result) => {
                return res.redirect('/users');
            }).catch(err => {
                return res.json(err);
            });
        },
    }
}