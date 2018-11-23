module.exports = function(sequelize, DataTypes) {
  var Device = sequelize.define("Devices", {
    LectureP1: DataTypes.FLOAT,
    LectureP2: DataTypes.FLOAT,
    LectureP3: DataTypes.FLOAT,
    LectureP4: DataTypes.FLOAT,
    LectureP5: DataTypes.FLOAT,
    NumSerie: DataTypes.INTEGER
  });
  return Device;
};
