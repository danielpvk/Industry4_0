USE Industry4_0;

INSERT INTO processes (Process_name,Devices_quantity,Device1_name,Device1_type,Device2_name,Device2_Type)
VALUES ("Freido de papa",2,'Sensor de temperatura',2,'Sensor de Velocidad',1);

INSERT INTO processes (Process_name,Devices_quantity,Device1_name,Device1_type,Device2_name,Device2_Type)
VALUES ("Freido de dorito",2,'Sensor de temperatura',2,'Sensor de Velocidad',1);

INSERT INTO devicetypes (DeviceTypeDescription,Parameters_quantity,Parameter1_name,Parameter1_min_val,Parameter1_max_val,Parameter2_name,Parameter2_min_val,Parameter2_max_val,Parameter3_name,Parameter3_min_val,Parameter3_max_val)
VALUES ("Motor 1hp",3,"Current consumption",1,7,"Temperature(C)",5,80,"vibration",0.01,0.05);

INSERT INTO devicetypes (DeviceTypeDescription,Parameters_quantity,Parameter1_name,Parameter1_min_val,Parameter1_max_val,Parameter2_name,Parameter2_min_val,Parameter2_max_val,Parameter3_name,Parameter3_min_val,Parameter3_max_val)
VALUES ("Motor 2hp",3,"Current consumption",5,14,"Temperature(C)",5,80,"vibration",0.01,0.05);

INSERT INTO devicetypes (DeviceTypeDescription,Parameters_quantity,Parameter1_name,Parameter1_min_val,Parameter1_max_val,Parameter2_name,Parameter2_min_val,Parameter2_max_val,Parameter3_name,Parameter3_min_val,Parameter3_max_val)
VALUES ("Motor 5hp",3,"Current consumption",12,22,"Temperature(C)",5,80,"vibration",0.01,0.05);