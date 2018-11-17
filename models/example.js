module.exports = function(sequelize, DataTypes) {
  var Process = sequelize.define("Process", {
    Process_name: DataTypes.STRING,
    Process_Description: DataTypes.TEXT
  });
  return Process;
};
