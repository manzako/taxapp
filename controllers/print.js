//const db = require("../../models");


module.exports.controller = (app) => {

  app.get('/print',function (req, res) {
    res.render('pages/print');
  });


  //DEBUG=express_app:* npm start


};
