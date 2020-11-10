const db = require("../models");


module.exports.controller = (app) => {

  app.get('/print',function (req, res) {
    res.render('pages/print');
  });
  app.get('/print/fiches/:id',async function (req, res) {

    const fiche=await db.fiche.findAll({where:{id:req.params.id}});
    res.render('pages/print',{
        fiche:fiche
    })
  });



  //DEBUG=express_app:* npm start


};
