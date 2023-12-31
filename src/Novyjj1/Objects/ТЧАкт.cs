﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Novyjj1
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Т ч акт.
    /// </summary>
    // *** Start programmer edit section *** (ТЧАкт CustomAttributes)

    // *** End programmer edit section *** (ТЧАкт CustomAttributes)
    [AutoAltered()]
    [Caption("Табличная часть акта выполнения работ")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ТЧАктE", new string[] {
            "ЕдИзмер as \'Единицы измерения\'",
            "ЕдИзмер.Наименование as \'Единицы измерения\'",
            "ЦенаЗаЕд as \'Цена за единицу\'",
            "Количество as \'Количество\'",
            "Стоимость as \'Стоимость\'"})]
    [View("ТЧАктL", new string[] {
            "ЕдИзмер.Наименование as \'Единицы измерения\'",
            "ЦенаЗаЕд as \'Цена за ед\'",
            "Стоимость as \'Стоимость\'",
            "Количество as \'Количество\'"})]
    public class ТЧАкт : ICSSoft.STORMNET.DataObject
    {
        
        private float fСтоимость;
        
        private float fЦенаЗаЕд;
        
        private float fКоличество;
        
        private IIS.Novyjj1.ЕдИзмер fЕдИзмер;
        
        private IIS.Novyjj1.АктВыпРаб fАктВыпРаб;
        
        // *** Start programmer edit section *** (ТЧАкт CustomMembers)

        // *** End programmer edit section *** (ТЧАкт CustomMembers)

        
        /// <summary>
        /// Количество.
        /// </summary>
        // *** Start programmer edit section *** (ТЧАкт.Количество CustomAttributes)

        // *** End programmer edit section *** (ТЧАкт.Количество CustomAttributes)
        public virtual float Количество
        {
            get
            {
                // *** Start programmer edit section *** (ТЧАкт.Количество Get start)

                // *** End programmer edit section *** (ТЧАкт.Количество Get start)
                float result = this.fКоличество;
                // *** Start programmer edit section *** (ТЧАкт.Количество Get end)

                // *** End programmer edit section *** (ТЧАкт.Количество Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧАкт.Количество Set start)

                // *** End programmer edit section *** (ТЧАкт.Количество Set start)
                this.fКоличество = value;
                // *** Start programmer edit section *** (ТЧАкт.Количество Set end)

                // *** End programmer edit section *** (ТЧАкт.Количество Set end)
            }
        }
        
        /// <summary>
        /// Стоимость.
        /// </summary>
        // *** Start programmer edit section *** (ТЧАкт.Стоимость CustomAttributes)

        // *** End programmer edit section *** (ТЧАкт.Стоимость CustomAttributes)
        public virtual float Стоимость
        {
            get
            {
                // *** Start programmer edit section *** (ТЧАкт.Стоимость Get start)

                // *** End programmer edit section *** (ТЧАкт.Стоимость Get start)
                float result = this.fСтоимость;
                // *** Start programmer edit section *** (ТЧАкт.Стоимость Get end)

                // *** End programmer edit section *** (ТЧАкт.Стоимость Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧАкт.Стоимость Set start)

                // *** End programmer edit section *** (ТЧАкт.Стоимость Set start)
                this.fСтоимость = value;
                // *** Start programmer edit section *** (ТЧАкт.Стоимость Set end)

                // *** End programmer edit section *** (ТЧАкт.Стоимость Set end)
            }
        }
        
        /// <summary>
        /// ЦенаЗаЕд.
        /// </summary>
        // *** Start programmer edit section *** (ТЧАкт.ЦенаЗаЕд CustomAttributes)

        // *** End programmer edit section *** (ТЧАкт.ЦенаЗаЕд CustomAttributes)
        public virtual float ЦенаЗаЕд
        {
            get
            {
                // *** Start programmer edit section *** (ТЧАкт.ЦенаЗаЕд Get start)

                // *** End programmer edit section *** (ТЧАкт.ЦенаЗаЕд Get start)
                float result = this.fЦенаЗаЕд;
                // *** Start programmer edit section *** (ТЧАкт.ЦенаЗаЕд Get end)

                // *** End programmer edit section *** (ТЧАкт.ЦенаЗаЕд Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧАкт.ЦенаЗаЕд Set start)

                // *** End programmer edit section *** (ТЧАкт.ЦенаЗаЕд Set start)
                this.fЦенаЗаЕд = value;
                // *** Start programmer edit section *** (ТЧАкт.ЦенаЗаЕд Set end)

                // *** End programmer edit section *** (ТЧАкт.ЦенаЗаЕд Set end)
            }
        }
        
        /// <summary>
        /// Т ч акт.
        /// </summary>
        // *** Start programmer edit section *** (ТЧАкт.ЕдИзмер CustomAttributes)

        // *** End programmer edit section *** (ТЧАкт.ЕдИзмер CustomAttributes)
        [PropertyStorage(new string[] {
                "ЕдИзмер"})]
        [NotNull()]
        public virtual IIS.Novyjj1.ЕдИзмер ЕдИзмер
        {
            get
            {
                // *** Start programmer edit section *** (ТЧАкт.ЕдИзмер Get start)

                // *** End programmer edit section *** (ТЧАкт.ЕдИзмер Get start)
                IIS.Novyjj1.ЕдИзмер result = this.fЕдИзмер;
                // *** Start programmer edit section *** (ТЧАкт.ЕдИзмер Get end)

                // *** End programmer edit section *** (ТЧАкт.ЕдИзмер Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧАкт.ЕдИзмер Set start)

                // *** End programmer edit section *** (ТЧАкт.ЕдИзмер Set start)
                this.fЕдИзмер = value;
                // *** Start programmer edit section *** (ТЧАкт.ЕдИзмер Set end)

                // *** End programmer edit section *** (ТЧАкт.ЕдИзмер Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Novyjj1.АктВыпРаб.
        /// </summary>
        // *** Start programmer edit section *** (ТЧАкт.АктВыпРаб CustomAttributes)

        // *** End programmer edit section *** (ТЧАкт.АктВыпРаб CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "АктВыпРаб"})]
        public virtual IIS.Novyjj1.АктВыпРаб АктВыпРаб
        {
            get
            {
                // *** Start programmer edit section *** (ТЧАкт.АктВыпРаб Get start)

                // *** End programmer edit section *** (ТЧАкт.АктВыпРаб Get start)
                IIS.Novyjj1.АктВыпРаб result = this.fАктВыпРаб;
                // *** Start programmer edit section *** (ТЧАкт.АктВыпРаб Get end)

                // *** End programmer edit section *** (ТЧАкт.АктВыпРаб Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧАкт.АктВыпРаб Set start)

                // *** End programmer edit section *** (ТЧАкт.АктВыпРаб Set start)
                this.fАктВыпРаб = value;
                // *** Start programmer edit section *** (ТЧАкт.АктВыпРаб Set end)

                // *** End programmer edit section *** (ТЧАкт.АктВыпРаб Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ТЧАктE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТЧАктE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТЧАктE", typeof(IIS.Novyjj1.ТЧАкт));
                }
            }
            
            /// <summary>
            /// "ТЧАктL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТЧАктL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТЧАктL", typeof(IIS.Novyjj1.ТЧАкт));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of ТЧАкт.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfТЧАкт CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfТЧАкт CustomAttributes)
    public class DetailArrayOfТЧАкт : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Novyjj1.DetailArrayOfТЧАкт members)

        // *** End programmer edit section *** (IIS.Novyjj1.DetailArrayOfТЧАкт members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type ТЧАкт by index.
        /// </summary>
        /// <summary>
        /// Adds object with type ТЧАкт.
        /// </summary>
        public DetailArrayOfТЧАкт(IIS.Novyjj1.АктВыпРаб fАктВыпРаб) : 
                base(typeof(ТЧАкт), ((ICSSoft.STORMNET.DataObject)(fАктВыпРаб)))
        {
        }
        
        public IIS.Novyjj1.ТЧАкт this[int index]
        {
            get
            {
                return ((IIS.Novyjj1.ТЧАкт)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Novyjj1.ТЧАкт dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
