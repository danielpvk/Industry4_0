module.exports = function(sequelize, DataTypes) {
    var Process = sequelize.define("Process", {
        Process_name: DataTypes.STRING,
        Devices_quantity: DataTypes.INTEGER
    });
     return Process;
  };
  