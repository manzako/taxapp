const db = require("../models");

module.exports.controller = (app) => {
    // get form
  app.get('/login',messages,function (req, res) {
        res.render('pages/login');

    });


  app.post('/auth', async function(request, response) {
	var username =await request.body.username;
	var password =await request.body.password;
	if (username && password) {

    const user = await db.user.findOne({ where: { nom: username, pwd:password } }).then(oneUser=>{

      if (oneUser!==null) {
			  request.session.loggedin = true;
				request.session.nom = username;
				response.redirect('/');
			} else {

				response.render('/login',messages);
			}
			response.end();
    });


	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

    //DEBUG=express_app:* npm start
    function messages(req,res,next){
          let message='Incorrect Username and/or Password!';
        res.locals.message = message;
        next();
    }

  };
