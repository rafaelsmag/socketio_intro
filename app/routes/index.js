module.exports = (app) => {
 var controller = app.controller.pages;

 app.get('/', controller.index);
}
