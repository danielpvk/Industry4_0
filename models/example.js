module.exports =function(sequelize, DataTypes) {
  var Process = sequelize.define("Process", {
    Process_name: DataTypes.STRING,
    Process_Description: DataTypes.TEXT,
    Devices_quantity: DataTypes.INTEGER,
    Device1_name: DataTypes.STRING,
    Device1_type: DataTypes.INTEGER,
    IdDevice1: DataTypes.INTEGER,
    Device2_name: DataTypes.STRING,
    Device2_type: DataTypes.INTEGER,
    IdDevice2: DataTypes.INTEGER,
    Device3_name: DataTypes.STRING,
    Device3_type: DataTypes.INTEGER,
    IdDevice3: DataTypes.INTEGER,
    Device4_name: DataTypes.STRING,
    Device4_type: DataTypes.INTEGER,
    IdDevice4: DataTypes.INTEGER,
    Device5_name: DataTypes.STRING,
    Device5_type: DataTypes.INTEGER,
    IdDevice5: DataTypes.INTEGER,
    Device1_type_description:DataTypes.STRING,
    Device2_type_description:DataTypes.STRING,
    Device3_type_description:DataTypes.STRING,
    Device4_type_description:DataTypes.STRING,
    Device5_type_description:DataTypes.STRING
  });

  return Process;
};

