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
    /// Планиров СМР.
    /// </summary>
    // *** Start programmer edit section *** (ПланировСМР CustomAttributes)

    // *** End programmer edit section *** (ПланировСМР CustomAttributes)
    [AutoAltered()]
    [Caption("Планирование СМР")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ПланировСМРE", new string[] {
            "Номенклатура as \'Номенклатура\'",
            "Номенклатура.НаимРабот as \'Номенклатура\'",
            "КодСДР as \'Код СДР\'",
            "ДатаНачала as \'Дата начала\'",
            "ДатаОкончания as \'Дата окончания\'",
            "Длительность as \'Длительность\'"})]
    [View("ПланировСМРL", new string[] {
            "Номенклатура.НаимРабот as \'Номенклатура\'",
            "КодСДР as \'Код СДР\'",
            "ДатаНачала as \'Дата начала\'",
            "ДатаОкончания as \'Дата окончания\'",
            "Длительность as \'Длительность\'"})]
    public class ПланировСМР : ICSSoft.STORMNET.DataObject
    {
        
        private int fКодСДР;
        
        private System.DateTime fДатаНачала;
        
        private int fДлительность;
        
        private System.DateTime fДатаОкончания;
        
        private IIS.Novyjj1.Номенклатура fНоменклатура;
        
        // *** Start programmer edit section *** (ПланировСМР CustomMembers)

        // *** End programmer edit section *** (ПланировСМР CustomMembers)

        
        /// <summary>
        /// ДатаНачала.
        /// </summary>
        // *** Start programmer edit section *** (ПланировСМР.ДатаНачала CustomAttributes)

        // *** End programmer edit section *** (ПланировСМР.ДатаНачала CustomAttributes)
        public virtual System.DateTime ДатаНачала
        {
            get
            {
                // *** Start programmer edit section *** (ПланировСМР.ДатаНачала Get start)

                // *** End programmer edit section *** (ПланировСМР.ДатаНачала Get start)
                System.DateTime result = this.fДатаНачала;
                // *** Start programmer edit section *** (ПланировСМР.ДатаНачала Get end)

                // *** End programmer edit section *** (ПланировСМР.ДатаНачала Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПланировСМР.ДатаНачала Set start)

                // *** End programmer edit section *** (ПланировСМР.ДатаНачала Set start)
                this.fДатаНачала = value;
                // *** Start programmer edit section *** (ПланировСМР.ДатаНачала Set end)

                // *** End programmer edit section *** (ПланировСМР.ДатаНачала Set end)
            }
        }
        
        /// <summary>
        /// ДатаОкончания.
        /// </summary>
        // *** Start programmer edit section *** (ПланировСМР.ДатаОкончания CustomAttributes)

        // *** End programmer edit section *** (ПланировСМР.ДатаОкончания CustomAttributes)
        public virtual System.DateTime ДатаОкончания
        {
            get
            {
                // *** Start programmer edit section *** (ПланировСМР.ДатаОкончания Get start)

                // *** End programmer edit section *** (ПланировСМР.ДатаОкончания Get start)
                System.DateTime result = this.fДатаОкончания;
                // *** Start programmer edit section *** (ПланировСМР.ДатаОкончания Get end)

                // *** End programmer edit section *** (ПланировСМР.ДатаОкончания Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПланировСМР.ДатаОкончания Set start)

                // *** End programmer edit section *** (ПланировСМР.ДатаОкончания Set start)
                this.fДатаОкончания = value;
                // *** Start programmer edit section *** (ПланировСМР.ДатаОкончания Set end)

                // *** End programmer edit section *** (ПланировСМР.ДатаОкончания Set end)
            }
        }
        
        /// <summary>
        /// Длительность.
        /// </summary>
        // *** Start programmer edit section *** (ПланировСМР.Длительность CustomAttributes)

        // *** End programmer edit section *** (ПланировСМР.Длительность CustomAttributes)
        public virtual int Длительность
        {
            get
            {
                // *** Start programmer edit section *** (ПланировСМР.Длительность Get start)

                // *** End programmer edit section *** (ПланировСМР.Длительность Get start)
                int result = this.fДлительность;
                // *** Start programmer edit section *** (ПланировСМР.Длительность Get end)

                // *** End programmer edit section *** (ПланировСМР.Длительность Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПланировСМР.Длительность Set start)

                // *** End programmer edit section *** (ПланировСМР.Длительность Set start)
                this.fДлительность = value;
                // *** Start programmer edit section *** (ПланировСМР.Длительность Set end)

                // *** End programmer edit section *** (ПланировСМР.Длительность Set end)
            }
        }
        
        /// <summary>
        /// КодСДР.
        /// </summary>
        // *** Start programmer edit section *** (ПланировСМР.КодСДР CustomAttributes)

        // *** End programmer edit section *** (ПланировСМР.КодСДР CustomAttributes)
        public virtual int КодСДР
        {
            get
            {
                // *** Start programmer edit section *** (ПланировСМР.КодСДР Get start)

                // *** End programmer edit section *** (ПланировСМР.КодСДР Get start)
                int result = this.fКодСДР;
                // *** Start programmer edit section *** (ПланировСМР.КодСДР Get end)

                // *** End programmer edit section *** (ПланировСМР.КодСДР Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПланировСМР.КодСДР Set start)

                // *** End programmer edit section *** (ПланировСМР.КодСДР Set start)
                this.fКодСДР = value;
                // *** Start programmer edit section *** (ПланировСМР.КодСДР Set end)

                // *** End programmer edit section *** (ПланировСМР.КодСДР Set end)
            }
        }
        
        /// <summary>
        /// Планиров СМР.
        /// </summary>
        // *** Start programmer edit section *** (ПланировСМР.Номенклатура CustomAttributes)

        // *** End programmer edit section *** (ПланировСМР.Номенклатура CustomAttributes)
        [PropertyStorage(new string[] {
                "Номенклатура"})]
        [NotNull()]
        public virtual IIS.Novyjj1.Номенклатура Номенклатура
        {
            get
            {
                // *** Start programmer edit section *** (ПланировСМР.Номенклатура Get start)

                // *** End programmer edit section *** (ПланировСМР.Номенклатура Get start)
                IIS.Novyjj1.Номенклатура result = this.fНоменклатура;
                // *** Start programmer edit section *** (ПланировСМР.Номенклатура Get end)

                // *** End programmer edit section *** (ПланировСМР.Номенклатура Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПланировСМР.Номенклатура Set start)

                // *** End programmer edit section *** (ПланировСМР.Номенклатура Set start)
                this.fНоменклатура = value;
                // *** Start programmer edit section *** (ПланировСМР.Номенклатура Set end)

                // *** End programmer edit section *** (ПланировСМР.Номенклатура Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ПланировСМРE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПланировСМРE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПланировСМРE", typeof(IIS.Novyjj1.ПланировСМР));
                }
            }
            
            /// <summary>
            /// "ПланировСМРL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПланировСМРL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПланировСМРL", typeof(IIS.Novyjj1.ПланировСМР));
                }
            }
        }
    }
}
