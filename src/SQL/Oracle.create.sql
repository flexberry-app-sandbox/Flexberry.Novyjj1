



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

	"ВыпСум" FLOAT(53) NULL,

	"ВсегоСум" FLOAT(53) NULL,

	"ПланОб" FLOAT(53) NULL,

	"ВыпОб" FLOAT(53) NULL,

	"ВсегоОб" FLOAT(53) NULL,

	"ПланСум" FLOAT(53) NULL,

	"РеализоСум" FLOAT(53) NULL,

	"РеализовОб" FLOAT(53) NULL,

	"СпрСотр" RAW(16) NOT NULL,

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

	"Длит" NUMBER(10) NULL,

	"ПерВыпПо" DATE NULL,

	"ВыпОбРаб" FLOAT(53) NULL,

	"ПерВыпС" DATE NULL,

	"СпрСотр" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "БюдСтрои"
(

	"primaryKey" RAW(16) NOT NULL,

	"Длите" NUMBER(10) NULL,

	"НачРаб" DATE NULL,

	"Объем" FLOAT(53) NULL,

	"СтоимИто" FLOAT(53) NULL,

	"БазСт" FLOAT(53) NULL,

	"ОкоРаб" DATE NULL,

	"ЕдИзмер" RAW(16) NOT NULL,

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

	"ДокСмета" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "АктВыпРаб"
(

	"primaryKey" RAW(16) NOT NULL,

	"ОбщСтоим" FLOAT(53) NULL,

	"СпрКонтраг" RAW(16) NOT NULL,

	"СпрСотр" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ОтОРасОсМат"
(

	"primaryKey" RAW(16) NOT NULL,

	"КолПоАкт" FLOAT(53) NULL,

	"ОбРабПоСм" FLOAT(53) NULL,

	"НормРасх" FLOAT(53) NULL,

	"ОстПоСмет" FLOAT(53) NULL,

	"КолПоСме" FLOAT(53) NULL,

	"СпрСотр" RAW(16) NOT NULL,

	"ЕдИзмер" RAW(16) NOT NULL,

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

	"Стоимость" FLOAT(53) NULL,

	"ЦенаЗаЕд" FLOAT(53) NULL,

	"Количество" FLOAT(53) NULL,

	"ЕдИзмер" RAW(16) NOT NULL,

	"АктВыпРаб" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ДокСмета"
(

	"primaryKey" RAW(16) NOT NULL,

	"ОбщСметСт" FLOAT(53) NULL,

	"НомСмеРас" NUMBER(10) NULL,

	"СпрКонтраг" RAW(16) NOT NULL,

	"ЕдИзмер" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ДокУсловДог"
(

	"primaryKey" RAW(16) NOT NULL,

	"Объем" FLOAT(53) NULL,

	"ДатаОконч" DATE NULL,

	"Длительн" NUMBER(10) NULL,

	"ДатаНач" DATE NULL,

	"СпрКонтраг" RAW(16) NOT NULL,

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



ALTER TABLE "ПлФАнВыпРаб"
	ADD CONSTRAINT "ПлФАнВыпРаб_F_7078" FOREIGN KEY ("СпрСотр") REFERENCES "СпрСотр" ("primaryKey");

CREATE INDEX "ПлФАнВыпРаб_I_6016" on "ПлФАнВыпРаб" ("СпрСотр");

ALTER TABLE "ЖурУчВыпРаб"
	ADD CONSTRAINT "ЖурУчВыпРаб_F_3605" FOREIGN KEY ("СпрСотр") REFERENCES "СпрСотр" ("primaryKey");

CREATE INDEX "ЖурУчВыпРаб_I_2347" on "ЖурУчВыпРаб" ("СпрСотр");

ALTER TABLE "БюдСтрои"
	ADD CONSTRAINT "БюдСтрои_FЕдИ_5904" FOREIGN KEY ("ЕдИзмер") REFERENCES "ЕдИзмер" ("primaryKey");

CREATE INDEX "БюдСтрои_IЕдИ_1612" on "БюдСтрои" ("ЕдИзмер");

ALTER TABLE "СпрСотр"
	ADD CONSTRAINT "СпрСотр_FДолж_4392" FOREIGN KEY ("Должности") REFERENCES "Должности" ("primaryKey");

CREATE INDEX "СпрСотр_IДолж_3754" on "СпрСотр" ("Должности");

ALTER TABLE "ТЧСметы"
	ADD CONSTRAINT "ТЧСметы_FДокС_4561" FOREIGN KEY ("ДокСмета") REFERENCES "ДокСмета" ("primaryKey");

CREATE INDEX "ТЧСметы_IДокС_6163" on "ТЧСметы" ("ДокСмета");

ALTER TABLE "АктВыпРаб"
	ADD CONSTRAINT "АктВыпРаб_FСп_2444" FOREIGN KEY ("СпрКонтраг") REFERENCES "СпрКонтраг" ("primaryKey");

CREATE INDEX "АктВыпРаб_IСп_5183" on "АктВыпРаб" ("СпрКонтраг");

ALTER TABLE "АктВыпРаб"
	ADD CONSTRAINT "АктВыпРаб_FСп_8214" FOREIGN KEY ("СпрСотр") REFERENCES "СпрСотр" ("primaryKey");

CREATE INDEX "АктВыпРаб_IСп_5470" on "АктВыпРаб" ("СпрСотр");

ALTER TABLE "ОтОРасОсМат"
	ADD CONSTRAINT "ОтОРасОсМат_F_5315" FOREIGN KEY ("СпрСотр") REFERENCES "СпрСотр" ("primaryKey");

CREATE INDEX "ОтОРасОсМат_I_4943" on "ОтОРасОсМат" ("СпрСотр");

ALTER TABLE "ОтОРасОсМат"
	ADD CONSTRAINT "ОтОРасОсМат_F_1777" FOREIGN KEY ("ЕдИзмер") REFERENCES "ЕдИзмер" ("primaryKey");

CREATE INDEX "ОтОРасОсМат_I_5974" on "ОтОРасОсМат" ("ЕдИзмер");

ALTER TABLE "ТЧАкт"
	ADD CONSTRAINT "ТЧАкт_FЕдИзмер_0" FOREIGN KEY ("ЕдИзмер") REFERENCES "ЕдИзмер" ("primaryKey");

CREATE INDEX "ТЧАкт_IЕдИзмер" on "ТЧАкт" ("ЕдИзмер");

ALTER TABLE "ТЧАкт"
	ADD CONSTRAINT "ТЧАкт_FАктВып_6821" FOREIGN KEY ("АктВыпРаб") REFERENCES "АктВыпРаб" ("primaryKey");

CREATE INDEX "ТЧАкт_IАктВыпРаб" on "ТЧАкт" ("АктВыпРаб");

ALTER TABLE "ДокСмета"
	ADD CONSTRAINT "ДокСмета_FСпр_4492" FOREIGN KEY ("СпрКонтраг") REFERENCES "СпрКонтраг" ("primaryKey");

CREATE INDEX "ДокСмета_IСпр_3353" on "ДокСмета" ("СпрКонтраг");

ALTER TABLE "ДокСмета"
	ADD CONSTRAINT "ДокСмета_FЕдИз_127" FOREIGN KEY ("ЕдИзмер") REFERENCES "ЕдИзмер" ("primaryKey");

CREATE INDEX "ДокСмета_IЕдИ_7507" on "ДокСмета" ("ЕдИзмер");

ALTER TABLE "ДокУсловДог"
	ADD CONSTRAINT "ДокУсловДог_F_2838" FOREIGN KEY ("СпрКонтраг") REFERENCES "СпрКонтраг" ("primaryKey");

CREATE INDEX "ДокУсловДог_I_5945" on "ДокУсловДог" ("СпрКонтраг");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


