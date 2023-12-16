



CREATE TABLE [Должности] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [КодДолж] INT  NULL,

	 [Наимен] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ПлФАнВыпРаб] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ВсегоОб] REAL  NULL,

	 [ВсегоСум] REAL  NULL,

	 [ВыпОб] REAL  NULL,

	 [ВыпСум] REAL  NULL,

	 [ПланОб] REAL  NULL,

	 [ПланСум] REAL  NULL,

	 [РеализовОб] REAL  NULL,

	 [РеализоСум] REAL  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ПланировСМР] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ДатаНачала] DATETIME  NULL,

	 [ДатаОкончания] DATETIME  NULL,

	 [Длительность] INT  NULL,

	 [КодСДР] INT  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ЖурУчВыпРаб] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ВыпОбРаб] REAL  NULL,

	 [Длит] INT  NULL,

	 [ПерВыпПо] DATETIME  NULL,

	 [ПерВыпС] DATETIME  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [БюдСтрои] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [БазСт] REAL  NULL,

	 [Длите] INT  NULL,

	 [НачРаб] DATETIME  NULL,

	 [Объем] REAL  NULL,

	 [ОкоРаб] DATETIME  NULL,

	 [СтоимИто] REAL  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Номенклатура] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [КодНаим] INT  NULL,

	 [НаимРабот] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [СпрКонтраг] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ИНН] INT  NULL,

	 [Код] INT  NULL,

	 [КПП] INT  NULL,

	 [Наименование] VARCHAR(255)  NULL,

	 [ОГРН] INT  NULL,

	 [Телефон] INT  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [СпрСотр] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [IDСотр] INT  NULL,

	 [ФИО] VARCHAR(255)  NULL,

	 [Должности] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ТЧСметы] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [СтМонтРаб] REAL  NULL,

	 [СтОборуд] REAL  NULL,

	 [СтСтроиРаб] REAL  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [АктВыпРаб] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ОбщСтоим] REAL  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ОтОРасОсМат] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [КолПоАкт] REAL  NULL,

	 [КолПоСме] REAL  NULL,

	 [НормРасх] REAL  NULL,

	 [ОбРабПоСм] REAL  NULL,

	 [ОстПоСмет] REAL  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ЕдИзмер] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Код] INT  NULL,

	 [Наименование] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ТЧАкт] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Количество] REAL  NULL,

	 [Стоимость] REAL  NULL,

	 [ЦенаЗаЕд] REAL  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ДокСмета] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [НомСмеРас] INT  NULL,

	 [ОбщСметСт] REAL  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ДокУсловДог] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ДатаНач] DATETIME  NULL,

	 [ДатаОконч] DATETIME  NULL,

	 [Длительн] INT  NULL,

	 [Объем] REAL  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMNETLOCKDATA] (

	 [LockKey] VARCHAR(300)  NOT NULL,

	 [UserName] VARCHAR(300)  NOT NULL,

	 [LockDate] DATETIME  NULL,

	 PRIMARY KEY ([LockKey]))


CREATE TABLE [STORMSETTINGS] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Module] varchar(1000)  NULL,

	 [Name] varchar(255)  NULL,

	 [Value] text  NULL,

	 [User] varchar(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMAdvLimit] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [User] varchar(255)  NULL,

	 [Published] bit  NULL,

	 [Module] varchar(255)  NULL,

	 [Name] varchar(255)  NULL,

	 [Value] text  NULL,

	 [HotKeyData] int  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERSETTING] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Name] varchar(255)  NOT NULL,

	 [DataObjectView] varchar(255)  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMWEBSEARCH] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Name] varchar(255)  NOT NULL,

	 [Order] INT  NOT NULL,

	 [PresentView] varchar(255)  NOT NULL,

	 [DetailedView] varchar(255)  NOT NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERDETAIL] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Caption] varchar(255)  NOT NULL,

	 [DataObjectView] varchar(255)  NOT NULL,

	 [ConnectMasterProp] varchar(255)  NOT NULL,

	 [OwnerConnectProp] varchar(255)  NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERLOOKUP] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [DataObjectType] varchar(255)  NOT NULL,

	 [Container] varchar(255)  NULL,

	 [ContainerTag] varchar(255)  NULL,

	 [FieldsToView] varchar(255)  NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [UserSetting] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [AppName] varchar(256)  NULL,

	 [UserName] varchar(512)  NULL,

	 [UserGuid] uniqueidentifier  NULL,

	 [ModuleName] varchar(1024)  NULL,

	 [ModuleGuid] uniqueidentifier  NULL,

	 [SettName] varchar(256)  NULL,

	 [SettGuid] uniqueidentifier  NULL,

	 [SettLastAccessTime] DATETIME  NULL,

	 [StrVal] varchar(256)  NULL,

	 [TxtVal] varchar(max)  NULL,

	 [IntVal] int  NULL,

	 [BoolVal] bit  NULL,

	 [GuidVal] uniqueidentifier  NULL,

	 [DecimalVal] decimal(20,10)  NULL,

	 [DateTimeVal] DATETIME  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ApplicationLog] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Category] varchar(64)  NULL,

	 [EventId] INT  NULL,

	 [Priority] INT  NULL,

	 [Severity] varchar(32)  NULL,

	 [Title] varchar(256)  NULL,

	 [Timestamp] DATETIME  NULL,

	 [MachineName] varchar(32)  NULL,

	 [AppDomainName] varchar(512)  NULL,

	 [ProcessId] varchar(256)  NULL,

	 [ProcessName] varchar(512)  NULL,

	 [ThreadName] varchar(512)  NULL,

	 [Win32ThreadId] varchar(128)  NULL,

	 [Message] varchar(2500)  NULL,

	 [FormattedMessage] varchar(max)  NULL,

	 PRIMARY KEY ([primaryKey]))




