module.exports.controller = (app) => {

  const db = require("../models");
    // get form
    app.get('/register',function (req, res) {
        res.render('pages/register');

    });


    app.post('/register', function (req, res) {

//nouveaux codes par rapport au frontend
const fiche=req.body;
console.log(req.body.fiche);
        return res.status(201).json(fiche);
    });

function createFiche(req) {
  return new Promise((successCallback, failureCallback) => {
    try {
      db.fiche
      .create({
        type_personne:req.body.type_personne,
        nom_ou_raison_sociale:req.body.nom_ou_raison_sociale,
        rccm:req.body.rccm,
        numero_impot:req.body.numero_impot,
        telephone:req.body.telephone,
        adresse_physique:req.body.adresse_physique,
        commune:req.body.commune,
    }).then((result) => {
          successCallback(result);
        });
    } catch (err) {
      failureCallback(err);
    }
  });
}
function createVehicule(req, fiche) {
  return new Promise((successCallback, failureCallback) => {
    try {
      db.vehicule
        .create({
          genre:req.body.genre,
          marque:req.body.marque,
          type:req.body.type,
          couleur:req.body.couleur,
          chassis:req.body.chassis,
          type_personne:req.body.type_personne,
          puissance_fiscale:req.body.puissance_fiscale,
          usage:req.body.usage,
          date_mise_en_circulation:req.body.date_mise_en_circulation,
          ficheId:fiche["dataValues"].id,
        })
        .then((result) => {
          successCallback(result);
        });
    } catch (err) {
      failureCallback(err);
    }
  });
}



  };
