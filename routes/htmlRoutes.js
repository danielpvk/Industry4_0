var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {//cuando este el usuario en root
    console.log("making sql for examples");
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {  // 2) carga index
        msg: "Welcome!", // 3) manda el objeto con las propiedades msg y examples
        examples: dbExamples  //4) examples corresponde al resultado del callback
      });                   //de la base de datos
    });
  });

  // Load example page and pass in an example by id
 app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  }); 

  // Render 404 page for any unmatched routes
   app.get("*", function(req, res) {
    res.render("404");
  }); 
};
