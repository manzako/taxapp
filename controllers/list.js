//const db = require("../../models");


module.exports.controller = (app) => {


    app.get('/list',function (req, res) {
        //array with items to send
        var items = ['node.js','expressjs','ejs','javascript','bootstarp'];
        res.render('pages/list',{
            list:items
        })
    });
  //DEBUG=express_app:* npm start
  
 
};