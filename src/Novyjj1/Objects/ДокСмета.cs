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
    /// Док смета.
    /// </summary>
    // *** Start programmer edit section *** (ДокСмета CustomAttributes)

    // *** End programmer edit section *** (ДокСмета CustomAttributes)
    [AutoAltered()]
    [Caption("Документ смета")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ДокСметаE", new string[] {
            "НомСмеРас as \'Номер сметных расчетов\'",
            "ОбщСметСт as \'Общая сметная стоимость\'"})]
    [AssociatedDetailViewAttribute("ДокСметаE", "ТЧСметы", "ТЧСметыE", true, "", "Табличная часть сметы", true, new string[] {
            ""})]
    [View("ДокСметаL", new string[] {
            "НомСмеРас as \'Номер сметных расчетов\'",
            "ОбщСметСт as \'Общая сметная стоимость\'"})]
    public class ДокСмета : ICSSoft.STORMNET.DataObject
    {
        
        private int fНомСмеРас;
        
        private float fОбщСметСт;
        
        private IIS.Novyjj1.DetailArrayOfТЧСметы fТЧСметы;
        
        // *** Start programmer edit section *** (ДокСмета CustomMembers)

        // *** End programmer edit section *** (ДокСмета CustomMembers)

        
        /// <summary>
        /// НомСмеРас.
        /// </summary>
        // *** Start programmer edit section *** (ДокСмета.НомСмеРас CustomAttributes)

        // *** End programmer edit section *** (ДокСмета.НомСмеРас CustomAttributes)
        public virtual int НомСмеРас
        {
            get
            {
                // *** Start programmer edit section *** (ДокСмета.НомСмеРас Get start)

                // *** End programmer edit section *** (ДокСмета.НомСмеРас Get start)
                int result = this.fНомСмеРас;
                // *** Start programmer edit section *** (ДокСмета.НомСмеРас Get end)

                // *** End programmer edit section *** (ДокСмета.НомСмеРас Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ДокСмета.НомСмеРас Set start)

                // *** End programmer edit section *** (ДокСмета.НомСмеРас Set start)
                this.fНомСмеРас = value;
                // *** Start programmer edit section *** (ДокСмета.НомСмеРас Set end)

                // *** End programmer edit section *** (ДокСмета.НомСмеРас Set end)
            }
        }
        
        /// <summary>
        /// ОбщСметСт.
        /// </summary>
        // *** Start programmer edit section *** (ДокСмета.ОбщСметСт CustomAttributes)

        // *** End programmer edit section *** (ДокСмета.ОбщСметСт CustomAttributes)
        public virtual float ОбщСметСт
        {
            get
            {
                // *** Start programmer edit section *** (ДокСмета.ОбщСметСт Get start)

                // *** End programmer edit section *** (ДокСмета.ОбщСметСт Get start)
                float result = this.fОбщСметСт;
                // *** Start programmer edit section *** (ДокСмета.ОбщСметСт Get end)

                // *** End programmer edit section *** (ДокСмета.ОбщСметСт Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ДокСмета.ОбщСметСт Set start)

                // *** End programmer edit section *** (ДокСмета.ОбщСметСт Set start)
                this.fОбщСметСт = value;
                // *** Start programmer edit section *** (ДокСмета.ОбщСметСт Set end)

                // *** End programmer edit section *** (ДокСмета.ОбщСметСт Set end)
            }
        }
        
        /// <summary>
        /// Док смета.
        /// </summary>
        // *** Start programmer edit section *** (ДокСмета.ТЧСметы CustomAttributes)

        // *** End programmer edit section *** (ДокСмета.ТЧСметы CustomAttributes)
        public virtual IIS.Novyjj1.DetailArrayOfТЧСметы ТЧСметы
        {
            get
            {
                // *** Start programmer edit section *** (ДокСмета.ТЧСметы Get start)

                // *** End programmer edit section *** (ДокСмета.ТЧСметы Get start)
                if ((this.fТЧСметы == null))
                {
                    this.fТЧСметы = new IIS.Novyjj1.DetailArrayOfТЧСметы(this);
                }
                IIS.Novyjj1.DetailArrayOfТЧСметы result = this.fТЧСметы;
                // *** Start programmer edit section *** (ДокСмета.ТЧСметы Get end)

                // *** End programmer edit section *** (ДокСмета.ТЧСметы Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ДокСмета.ТЧСметы Set start)

                // *** End programmer edit section *** (ДокСмета.ТЧСметы Set start)
                this.fТЧСметы = value;
                // *** Start programmer edit section *** (ДокСмета.ТЧСметы Set end)

                // *** End programmer edit section *** (ДокСмета.ТЧСметы Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ДокСметаE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ДокСметаE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ДокСметаE", typeof(IIS.Novyjj1.ДокСмета));
                }
            }
            
            /// <summary>
            /// "ДокСметаL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ДокСметаL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ДокСметаL", typeof(IIS.Novyjj1.ДокСмета));
                }
            }
        }
    }
}
