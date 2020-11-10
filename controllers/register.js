const db = require("../models");

module.exports.controller = (app) => {
    // get form
    app.get('/register',function (req, res) {
        res.render('pages/register');

    });


    app.post('/register',function (req, res) {
        const fiche={
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

        }
        db.fiche
        .create(fiche)
        .then((uneFiche) => {
          return res.render('pages/show',uneFiche);
        })
        .catch((err) => {
          return res.status(404).json(err);
        });
        
    });

    
   
  };
  