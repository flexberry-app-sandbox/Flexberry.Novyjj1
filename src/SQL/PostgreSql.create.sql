




CREATE TABLE Должности (
 primaryKey UUID NOT NULL,
 КодДолж INT NULL,
 Наимен VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ПлФАнВыпРаб (
 primaryKey UUID NOT NULL,
 ВыпСум REAL NULL,
 ВсегоСум REAL NULL,
 ПланОб REAL NULL,
 ВыпОб REAL NULL,
 ВсегоОб REAL NULL,
 ПланСум REAL NULL,
 РеализоСум REAL NULL,
 РеализовОб REAL NULL,
 СпрСотр UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ПланировСМР (
 primaryKey UUID NOT NULL,
 КодСДР INT NULL,
 ДатаНачала TIMESTAMP(3) NULL,
 ДатаОкончания TIMESTAMP(3) NULL,
 Длительность INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ЖурУчВыпРаб (
 primaryKey UUID NOT NULL,
 Длит INT NULL,
 ПерВыпПо TIMESTAMP(3) NULL,
 ВыпОбРаб REAL NULL,
 ПерВыпС TIMESTAMP(3) NULL,
 СпрСотр UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE БюдСтрои (
 primaryKey UUID NOT NULL,
 Объем REAL NULL,
 НачРаб TIMESTAMP(3) NULL,
 ОкоРаб TIMESTAMP(3) NULL,
 Длите INT NULL,
 БазСт REAL NULL,
 СтоимИто REAL NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Номенклатура (
 primaryKey UUID NOT NULL,
 КодНаим INT NULL,
 НаимРабот VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE СпрКонтраг (
 primaryKey UUID NOT NULL,
 Код INT NULL,
 Наименование VARCHAR(255) NULL,
 ИНН INT NULL,
 КПП INT NULL,
 ОГРН INT NULL,
 Телефон INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE СпрСотр (
 primaryKey UUID NOT NULL,
 ФИО VARCHAR(255) NULL,
 IDСотр INT NULL,
 Должности UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ТЧСметы (
 primaryKey UUID NOT NULL,
 СтСтроиРаб REAL NULL,
 СтМонтРаб REAL NULL,
 СтОборуд REAL NULL,
 ДокСмета UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE АктВыпРаб (
 primaryKey UUID NOT NULL,
 ОбщСтоим REAL NULL,
 СпрКонтраг UUID NOT NULL,
 СпрСотр UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ОтОРасОсМат (
 primaryKey UUID NOT NULL,
 КолПоАкт REAL NULL,
 ОбРабПоСм REAL NULL,
 НормРасх REAL NULL,
 ОстПоСмет REAL NULL,
 КолПоСме REAL NULL,
 СпрСотр UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ЕдИзмер (
 primaryKey UUID NOT NULL,
 Код INT NULL,
 Наименование VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ТЧАкт (
 primaryKey UUID NOT NULL,
 ЦенаЗаЕд REAL NULL,
 Стоимость REAL NULL,
 Количество REAL NULL,
 АктВыпРаб UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ДокСмета (
 primaryKey UUID NOT NULL,
 ОбщСметСт REAL NULL,
 НомСмеРас INT NULL,
 СпрКонтраг UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ДокУсловДог (
 primaryKey UUID NOT NULL,
 Объем REAL NULL,
 ДатаОконч TIMESTAMP(3) NULL,
 Длительн INT NULL,
 ДатаНач TIMESTAMP(3) NULL,
 СпрКонтраг UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE ПлФАнВыпРаб ADD CONSTRAINT FKd551d1476f70bd293a7a6b5aacf1b1afb9e3c439 FOREIGN KEY (СпрСотр) REFERENCES СпрСотр; 
CREATE INDEX Indexd551d1476f70bd293a7a6b5aacf1b1afb9e3c439 on ПлФАнВыпРаб (СпрСотр); 

 ALTER TABLE ЖурУчВыпРаб ADD CONSTRAINT FK42d2b68f2cca30eca47e4632c19f012c7f61e45c FOREIGN KEY (СпрСотр) REFERENCES СпрСотр; 
CREATE INDEX Index42d2b68f2cca30eca47e4632c19f012c7f61e45c on ЖурУчВыпРаб (СпрСотр); 

 ALTER TABLE СпрСотр ADD CONSTRAINT FK84f5d0eee138f7821b89d17178555e868159e354 FOREIGN KEY (Должности) REFERENCES Должности; 
CREATE INDEX Index84f5d0eee138f7821b89d17178555e868159e354 on СпрСотр (Должности); 

 ALTER TABLE ТЧСметы ADD CONSTRAINT FKde8e67e13f04a0c989a951169ec41b415726974b FOREIGN KEY (ДокСмета) REFERENCES ДокСмета; 
CREATE INDEX Indexde8e67e13f04a0c989a951169ec41b415726974b on ТЧСметы (ДокСмета); 

 ALTER TABLE АктВыпРаб ADD CONSTRAINT FK51968361c3a8f4842b680d44988bfbbd65bf15c7 FOREIGN KEY (СпрКонтраг) REFERENCES СпрКонтраг; 
CREATE INDEX Index51968361c3a8f4842b680d44988bfbbd65bf15c7 on АктВыпРаб (СпрКонтраг); 

 ALTER TABLE АктВыпРаб ADD CONSTRAINT FK426f5ed0f4242552d3aeb5dee5a2c0c435596936 FOREIGN KEY (СпрСотр) REFERENCES СпрСотр; 
CREATE INDEX Index426f5ed0f4242552d3aeb5dee5a2c0c435596936 on АктВыпРаб (СпрСотр); 

 ALTER TABLE ОтОРасОсМат ADD CONSTRAINT FK5216b05d83f8a41cf0f9d13d5513bd60b97613e3 FOREIGN KEY (СпрСотр) REFERENCES СпрСотр; 
CREATE INDEX Index5216b05d83f8a41cf0f9d13d5513bd60b97613e3 on ОтОРасОсМат (СпрСотр); 

 ALTER TABLE ТЧАкт ADD CONSTRAINT FK04aec31c7869a48f76d108d273fea955d8166839 FOREIGN KEY (АктВыпРаб) REFERENCES АктВыпРаб; 
CREATE INDEX Index04aec31c7869a48f76d108d273fea955d8166839 on ТЧАкт (АктВыпРаб); 

 ALTER TABLE ДокСмета ADD CONSTRAINT FKfdcd57f6886b31c67ef3d79f10d0e20496a920a3 FOREIGN KEY (СпрКонтраг) REFERENCES СпрКонтраг; 
CREATE INDEX Indexfdcd57f6886b31c67ef3d79f10d0e20496a920a3 on ДокСмета (СпрКонтраг); 

 ALTER TABLE ДокУсловДог ADD CONSTRAINT FKd6af110b36a4e825659018fa00c1edffcc03b17d FOREIGN KEY (СпрКонтраг) REFERENCES СпрКонтраг; 
CREATE INDEX Indexd6af110b36a4e825659018fa00c1edffcc03b17d on ДокУсловДог (СпрКонтраг); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

