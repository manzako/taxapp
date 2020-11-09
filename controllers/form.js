//const db = require("../../models");

module.exports.controller = (app) => {
    // get form
    app.get('/form',messages,function (req, res) {
        res.render('pages/form');

    });


    app.post('/form',function (req, res) {
        var message=req.body;
        res.locals.message = message;
        res.render('pages/form');
    });

    //our alert message midleware
function messages(req,res,next){
    var message;
    res.locals.message = message;
    next();
}
  
    //DEBUG=express_app:* npm start
    
   
  };
  