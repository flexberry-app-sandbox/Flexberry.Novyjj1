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
    /// Т ч сметы.
    /// </summary>
    // *** Start programmer edit section *** (ТЧСметы CustomAttributes)

    // *** End programmer edit section *** (ТЧСметы CustomAttributes)
    [AutoAltered()]
    [Caption("Табличная часть сметы")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ТЧСметыE", new string[] {
            "СтСтроиРаб as \'Стоимость строительных работ\'",
            "СтМонтРаб as \'Стоимость монтажных работ\'",
            "СтОборуд as \'Стоимость оборудования\'"})]
    [View("ТЧСметыL", new string[] {
            "СтСтроиРаб as \'Ст строи раб\'",
            "СтМонтРаб as \'Ст монт раб\'",
            "СтОборуд as \'Ст оборуд\'"})]
    public class ТЧСметы : ICSSoft.STORMNET.DataObject
    {
        
        private float fСтСтроиРаб;
        
        private float fСтМонтРаб;
        
        private float fСтОборуд;
        
        // *** Start programmer edit section *** (ТЧСметы CustomMembers)

        // *** End programmer edit section *** (ТЧСметы CustomMembers)

        
        /// <summary>
        /// СтМонтРаб.
        /// </summary>
        // *** Start programmer edit section *** (ТЧСметы.СтМонтРаб CustomAttributes)

        // *** End programmer edit section *** (ТЧСметы.СтМонтРаб CustomAttributes)
        public virtual float СтМонтРаб
        {
            get
            {
                // *** Start programmer edit section *** (ТЧСметы.СтМонтРаб Get start)

                // *** End programmer edit section *** (ТЧСметы.СтМонтРаб Get start)
                float result = this.fСтМонтРаб;
                // *** Start programmer edit section *** (ТЧСметы.СтМонтРаб Get end)

                // *** End programmer edit section *** (ТЧСметы.СтМонтРаб Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧСметы.СтМонтРаб Set start)

                // *** End programmer edit section *** (ТЧСметы.СтМонтРаб Set start)
                this.fСтМонтРаб = value;
                // *** Start programmer edit section *** (ТЧСметы.СтМонтРаб Set end)

                // *** End programmer edit section *** (ТЧСметы.СтМонтРаб Set end)
            }
        }
        
        /// <summary>
        /// СтОборуд.
        /// </summary>
        // *** Start programmer edit section *** (ТЧСметы.СтОборуд CustomAttributes)

        // *** End programmer edit section *** (ТЧСметы.СтОборуд CustomAttributes)
        public virtual float СтОборуд
        {
            get
            {
                // *** Start programmer edit section *** (ТЧСметы.СтОборуд Get start)

                // *** End programmer edit section *** (ТЧСметы.СтОборуд Get start)
                float result = this.fСтОборуд;
                // *** Start programmer edit section *** (ТЧСметы.СтОборуд Get end)

                // *** End programmer edit section *** (ТЧСметы.СтОборуд Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧСметы.СтОборуд Set start)

                // *** End programmer edit section *** (ТЧСметы.СтОборуд Set start)
                this.fСтОборуд = value;
                // *** Start programmer edit section *** (ТЧСметы.СтОборуд Set end)

                // *** End programmer edit section *** (ТЧСметы.СтОборуд Set end)
            }
        }
        
        /// <summary>
        /// СтСтроиРаб.
        /// </summary>
        // *** Start programmer edit section *** (ТЧСметы.СтСтроиРаб CustomAttributes)

        // *** End programmer edit section *** (ТЧСметы.СтСтроиРаб CustomAttributes)
        public virtual float СтСтроиРаб
        {
            get
            {
                // *** Start programmer edit section *** (ТЧСметы.СтСтроиРаб Get start)

                // *** End programmer edit section *** (ТЧСметы.СтСтроиРаб Get start)
                float result = this.fСтСтроиРаб;
                // *** Start programmer edit section *** (ТЧСметы.СтСтроиРаб Get end)

                // *** End programmer edit section *** (ТЧСметы.СтСтроиРаб Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧСметы.СтСтроиРаб Set start)

                // *** End programmer edit section *** (ТЧСметы.СтСтроиРаб Set start)
                this.fСтСтроиРаб = value;
                // *** Start programmer edit section *** (ТЧСметы.СтСтроиРаб Set end)

                // *** End programmer edit section *** (ТЧСметы.СтСтроиРаб Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ТЧСметыE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТЧСметыE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТЧСметыE", typeof(IIS.Novyjj1.ТЧСметы));
                }
            }
            
            /// <summary>
            /// "ТЧСметыL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТЧСметыL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТЧСметыL", typeof(IIS.Novyjj1.ТЧСметы));
                }
            }
        }
    }
}
