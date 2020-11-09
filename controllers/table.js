//const db = require("../../models");


module.exports.controller = (app) => {

  //DEBUG=express_app:* npm start

  app.get('/table',function (req, res) {
    //array with items to send
    var items = [
        {name:'node.js',url:'https://nodejs.org/en/'},
        {name:'ejs',url:'https://ejs.co'},
        {name:'expressjs',url:'https://expressjs.com'},
        {name:'vuejs',url:'https://vuejs.org'},
        {name:'nextjs',url:'https://nextjs.org'}];

    res.render('pages/table',{
        table:items
    })
});
  
 
};