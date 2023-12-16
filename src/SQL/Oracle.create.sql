



CREATE TABLE "Должности"
(

	"primaryKey" RAW(16) NOT NULL,

	"КодДолж" NUMBER(10) NULL,

	"Наимен" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ПлФАнВыпРаб"
(

	"primaryKey" RAW(16) NOT NULL,

	"ВсегоОб" FLOAT(53) NULL,

	"ПланСум" FLOAT(53) NULL,

	"ВсегоСум" FLOAT(53) NULL,

	"ПланОб" FLOAT(53) NULL,

	"РеализовОб" FLOAT(53) NULL,

	"РеализоСум" FLOAT(53) NULL,

	"ВыпОб" FLOAT(53) NULL,

	"ВыпСум" FLOAT(53) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ПланировСМР"
(

	"primaryKey" RAW(16) NOT NULL,

	"КодСДР" NUMBER(10) NULL,

	"ДатаНачала" DATE NULL,

	"ДатаОкончания" DATE NULL,

	"Длительность" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ЖурУчВыпРаб"
(

	"primaryKey" RAW(16) NOT NULL,

	"ВыпОбРаб" FLOAT(53) NULL,

	"ПерВыпС" DATE NULL,

	"ПерВыпПо" DATE NULL,

	"Длит" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "БюдСтрои"
(

	"primaryKey" RAW(16) NOT NULL,

	"Объем" FLOAT(53) NULL,

	"НачРаб" DATE NULL,

	"ОкоРаб" DATE NULL,

	"Длите" NUMBER(10) NULL,

	"БазСт" FLOAT(53) NULL,

	"СтоимИто" FLOAT(53) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Номенклатура"
(

	"primaryKey" RAW(16) NOT NULL,

	"КодНаим" NUMBER(10) NULL,

	"НаимРабот" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "СпрКонтраг"
(

	"primaryKey" RAW(16) NOT NULL,

	"Код" NUMBER(10) NULL,

	"Наименование" NVARCHAR2(255) NULL,

	"ИНН" NUMBER(10) NULL,

	"КПП" NUMBER(10) NULL,

	"ОГРН" NUMBER(10) NULL,

	"Телефон" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "СпрСотр"
(

	"primaryKey" RAW(16) NOT NULL,

	"ФИО" NVARCHAR2(255) NULL,

	"IDСотр" NUMBER(10) NULL,

	"Должности" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ТЧСметы"
(

	"primaryKey" RAW(16) NOT NULL,

	"СтСтроиРаб" FLOAT(53) NULL,

	"СтМонтРаб" FLOAT(53) NULL,

	"СтОборуд" FLOAT(53) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "АктВыпРаб"
(

	"primaryKey" RAW(16) NOT NULL,

	"ОбщСтоим" FLOAT(53) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ОтОРасОсМат"
(

	"primaryKey" RAW(16) NOT NULL,

	"ОбРабПоСм" FLOAT(53) NULL,

	"НормРасх" FLOAT(53) NULL,

	"КолПоСме" FLOAT(53) NULL,

	"ОстПоСмет" FLOAT(53) NULL,

	"КолПоАкт" FLOAT(53) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ЕдИзмер"
(

	"primaryKey" RAW(16) NOT NULL,

	"Код" NUMBER(10) NULL,

	"Наименование" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ТЧАкт"
(

	"primaryKey" RAW(16) NOT NULL,

	"ЦенаЗаЕд" FLOAT(53) NULL,

	"Стоимость" FLOAT(53) NULL,

	"Количество" FLOAT(53) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ДокСмета"
(

	"primaryKey" RAW(16) NOT NULL,

	"НомСмеРас" NUMBER(10) NULL,

	"ОбщСметСт" FLOAT(53) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ДокУсловДог"
(

	"primaryKey" RAW(16) NOT NULL,

	"ДатаНач" DATE NULL,

	"ДатаОконч" DATE NULL,

	"Объем" FLOAT(53) NULL,

	"Длительн" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "СпрСотр"
	ADD CONSTRAINT "СпрСотр_FДолж_4392" FOREIGN KEY ("Должности") REFERENCES "Должности" ("primaryKey");

CREATE INDEX "СпрСотр_IДолж_3754" on "СпрСотр" ("Должности");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


