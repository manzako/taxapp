const db = require("../models");
const moment = require('moment');


module.exports.controller = (app) => {

  app.get('/print',function (req, res) {
    res.render('pages/print');
  });
  app.get('/print/fiches/:id',async function (req, res) {

    const fiche=await db.fiche.findAll({where:{id:req.params.id}});
    const temps= await moment().format('l');
    res.render('pages/print',{
        fiche:fiche,
        temps:temps
    })
  });



  //DEBUG=express_app:* npm start


};
