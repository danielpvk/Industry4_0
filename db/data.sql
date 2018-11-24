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

INSERT INTO devicetypes (DeviceTypeDescription,Parameters_quantity,Parameter1_name,Parameter1_min_val,Parameter1_max_val,Parameter2_name,Parameter2_min_val,Parameter2_max_val)
VALUES ("Temperature/humidity Sensor",1,"Temperature",180,220,"Humidity (%)",40,70);

INSERT INTO devicetypes (DeviceTypeDescription,Parameters_quantity,Parameter1_name,Parameter1_min_val,Parameter1_max_val,Parameter2_name,Parameter2_min_val,Parameter2_max_val)
VALUES ("Temperature/humidity Sensor -Low Temp",2,"Temperature",0,45,"Humidity (%)",40,80);

INSERT INTO devicetypes (DeviceTypeDescription,Parameters_quantity,Parameter1_name,Parameter1_min_val,Parameter1_max_val)
VALUES ("RFID Counter",2,"Pieces/hr",0,500);

INSERT INTO devicetypes (DeviceTypeDescription,Parameters_quantity,Parameter1_name,Parameter1_min_val,Parameter1_max_val,Parameter2_name,Parameter2_min_val,Parameter2_max_val)
VALUES ("Pressure Sensor",2,"Pressure (psi)",50,150,"Flow (cfm)",10,20);

INSERT INTO devices (LectureP1,LectureP2,NumSerie) 
VALUES (15,12,1234);


INSERT INTO devices (LectureP1,LectureP2,NumSerie) 
VALUES (15.1,12.1,1234);


INSERT INTO devices (LectureP1,LectureP2,NumSerie) 
VALUES (15.1,12.81,1234);

INSERT INTO devices (LectureP1,LectureP2,NumSerie) 
VALUES (14.5,13.2,1234);

INSERT INTO devices (LectureP1,LectureP2,NumSerie) 
VALUES (15.7,12.3,1234);

INSERT INTO devices (LectureP1,LectureP2,NumSerie) 
VALUES (183,55,4567);

INSERT INTO devices (LectureP1,LectureP2,NumSerie) 
VALUES (183,55,4567);
INSERT INTO devices (LectureP1,LectureP2,NumSerie) 
VALUES (187,55,4567);
INSERT INTO devices (LectureP1,LectureP2,NumSerie) 
VALUES (195,55,4567);
INSERT INTO devices (LectureP1,LectureP2,NumSerie) 
VALUES (210,55,4567);
INSERT INTO devices (LectureP1,LectureP2,NumSerie) 
VALUES (221,55,4567);
INSERT INTO devices (LectureP1,LectureP2,NumSerie) 
VALUES (229,55,4567);
INSERT INTO devices (LectureP1,LectureP2,NumSerie) 
VALUES (232,55,4567);
INSERT INTO devices (LectureP1,LectureP2,NumSerie) 
VALUES (228,54,4567);
INSERT INTO devices (LectureP1,LectureP2,NumSerie) 
VALUES (183,53,4567);
INSERT INTO devices (LectureP1,LectureP2,NumSerie) 
VALUES (227,49,4567);
INSERT INTO devices (LectureP1,LectureP2,NumSerie) 
VALUES (224,38,4567);