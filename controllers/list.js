const db = require("../models");


module.exports.controller = (app) => {


    app.get('/list',async function (req, res) {
        //array with items to send
        const list=await db.fiche.findAll();
        res.render('pages/list',{
            list:list
        })
    });
  //DEBUG=express_app:* npm start


};
