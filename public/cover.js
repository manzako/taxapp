$(document).ready(function(){
  let fiche={};
  let vehicule=[];
  $("#btnAjoutVehicule").click(function(){
    if($("#genre").val()!=="" && $("#marque").val()!=="" &&  $("#type").val()!=="" &&  $("#couleur").val()!=="" &&   $("#chassis").val()!=="" &&   $("#usage").val()!=="" && $("#puissance_fiscale").val()!=="" && $("#date_mise_en_circulation").val()!==""){

      vehicule.push({
        genre:$("#genre").val(),
        marque:$("#marque").val(),
        type: $("#type").val(),
        couleur:$("#couleur").val(),
        chassis: $("#chassis").val(),
        usage:$("#usage").val(),
        puissance_fiscale:$("#puissance_fiscale").val(),
        date_mise_en_circulation:$("#date_mise_en_circulation").val(),

      });
      $("#genre").val("");
      $("#marque").val("");
      $("#type").val("");
      $("#couleur").val("");
      $("#chassis").val("");
      $("#usage").val("");
      $("#puissance_fiscale").val("");
      $("#date_mise_en_circulation").val("");
      alert("ok");
      console.log(vehicule);
    }else{
      alert("remplir tous les champs reservés au vehicule svp !");
    }
  }
);
$("#btnEnregistrer").click(function(){
      if($("#type_personne").val()!=="" && $("#nom_ou_raison_sociale").val()!=="" &&  $("#rccm").val()!=="" &&  $("#numero_impot").val()!=="" &&   $("#telephone").val()!=="" &&   $("#adresse_physique").val()!=="" && $("#commune").val()!==""){


      if(vehicule.length>0){
        fiche["type_personne"]=$("#type_personne").val();
        fiche["nom_ou_raison_sociale"]=$("#nom_ou_raison_sociale").val();
        fiche["rccm"]=$("#rccm").val();
        fiche["numero_impot"]=$("#numero_impot").val();
        fiche["telephone"]= $("#telephone").val();
        fiche["adresse_physique"]=$("#adresse_physique").val();
        fiche["commune"]=$("#commune").val();
        fiche["vehicule"]=vehicule;
        fetch('/register', {
    method: 'post',
    headers: {
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
    body: {fiche:fiche}
  }).then(function (data) {
    console.log('Request succeeded with JSON response', data);
      alert("enregistrement effectué");
  })
  .catch(function (error) {
    console.log('Request failed', error);
  });



      }else{
        alert("ajouter au moins un vehicule dans une fiche !");
      }
  }else{
    alert("ajouter les information du proprietaire avant d'enregister svp !");
  }
  console.log(fiche);


  //Affichons tous les vehicules deja dans le tableau de vehicules



  });

});
