var db = require("../models");

console.log("test");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {//cuando este el usuario en root
    db.Process.findAll({}).then(function(dbProcess) {
        console.log(dbProcess);
      res.render("index", {  // 2) carga index
        msg: "Welcome!", // 3) manda el objeto con las propiedades msg y examples
        process: dbProcess  //4) examples corresponde al resultado del callback
      });                   //de la base de datos
    });
  });
/* 
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
  }); */
};
