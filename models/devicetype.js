
module.exports =function(sequelize, DataTypes) {
  var Device = sequelize.define("DeviceTypes", {
    DeviceTypeDescription: DataTypes.STRING,
  });
  return Device;
};
