module.exports.controller = (app) => {

  const db = require("../models");
    // get form
    app.get('/register',function (req, res) {
        res.render('pages/register');

    });


    app.post('/register', function (req, res) {
        db.fiche
        .create({
          genre:req.body.genre,
          marque:req.body.marque,
          type:req.body.type,
          couleur:req.body.couleur,
          chassis:req.body.chassis,
          puissance_fiscale:req.body.puissance_fiscale,
          usage:req.body.usage,
          taxi:req.body.taxi,
          date_mise_en_circulation:req.body.date_mise_en_circulation,
          nom_ou_raison_sociale:req.body.nom_ou_raison_sociale,
          rccm:req.body.rccm,
          numero_impot:req.body.numero_impot,
          telephone:req.body.telephone,
          adresse_physique:req.body.adresse_physique,
          commune:req.body.commune

      })
        .then((uneFiche) => {
          return res.render('pages/show');
        })
        .catch((err) => {
          return res.status(404).json(err);
        });
        
    });

    
   
  };
  