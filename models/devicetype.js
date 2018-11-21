
module.exports =function(sequelize, DataTypes) {
  var DeviceType = sequelize.define("DeviceTypes", {
    DeviceTypeDescription: DataTypes.TEXT,
    Parameters_quantity: DataTypes.INTEGER,
    Parameter1_name: DataTypes.STRING,
    Parameter1_min_val: DataTypes.INTEGER,
    Parameter1_max_val: DataTypes.INTEGER,
    Parameter2_name: DataTypes.STRING,
    Parameter2_min_val: DataTypes.INTEGER,
    Parameter2_max_val: DataTypes.INTEGER,
    Parameter3_name: DataTypes.STRING,
    Parameter3_min_val: DataTypes.INTEGER,
    Parameter3_max_val: DataTypes.INTEGER,
    Parameter4_name: DataTypes.STRING,
    Parameter4_min_val: DataTypes.INTEGER,
    Parameter4_max_val: DataTypes.INTEGER,
    Parameter5_name: DataTypes.STRING,
    Parameter5_min_val: DataTypes.INTEGER,
    Parameter5_max_val: DataTypes.INTEGER,
  });
  return DeviceType;
};
