import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  выпОбРаб: DS.attr('decimal'),
  длит: DS.attr('number'),
  перВыпПо: DS.attr('date'),
  перВыпС: DS.attr('date'),
  номенклатура: DS.belongsTo('i-i-s-novyjj1-номенклатура', { inverse: null, async: false }),
  спрСотр: DS.belongsTo('i-i-s-novyjj1-спр-сотр', { inverse: null, async: false })
});

export let ValidationRules = {
  выпОбРаб: {
    descriptionKey: 'models.i-i-s-novyjj1-жур-уч-вып-раб.validations.выпОбРаб.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  длит: {
    descriptionKey: 'models.i-i-s-novyjj1-жур-уч-вып-раб.validations.длит.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  перВыпПо: {
    descriptionKey: 'models.i-i-s-novyjj1-жур-уч-вып-раб.validations.перВыпПо.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  перВыпС: {
    descriptionKey: 'models.i-i-s-novyjj1-жур-уч-вып-раб.validations.перВыпС.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номенклатура: {
    descriptionKey: 'models.i-i-s-novyjj1-жур-уч-вып-раб.validations.номенклатура.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  спрСотр: {
    descriptionKey: 'models.i-i-s-novyjj1-жур-уч-вып-раб.validations.спрСотр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЖурУчВыпРабE', 'i-i-s-novyjj1-жур-уч-вып-раб', {
    номенклатура: belongsTo('i-i-s-novyjj1-номенклатура', 'Номенклатура', {
      наимРабот: attr('Номенклатура', { index: 1 })
    }, { index: 0 }),
    выпОбРаб: attr('Выполнение объема работ', { index: 2 }),
    перВыпС: attr('Дата начала выполнения работ', { index: 3 }),
    перВыпПо: attr('Дата окончания выполнения работ', { index: 4 }),
    длит: attr('Длительность', { index: 5 }),
    спрСотр: belongsTo('i-i-s-novyjj1-спр-сотр', 'Сотрудник', {
      фИО: attr('Сотрудник', { index: 7 })
    }, { index: 6 })
  });

  modelClass.defineProjection('ЖурУчВыпРабL', 'i-i-s-novyjj1-жур-уч-вып-раб', {
    номенклатура: belongsTo('i-i-s-novyjj1-номенклатура', 'Номенклатура', {
      наимРабот: attr('Номенклатура', { index: 0 })
    }, { index: -1, hidden: true }),
    выпОбРаб: attr('Выполнение объема работ', { index: 1 }),
    перВыпС: attr('Дата начала выполнения работ', { index: 2 }),
    перВыпПо: attr('Дата окончания выполнения работ', { index: 3 }),
    длит: attr('Длительность', { index: 4 }),
    спрСотр: belongsTo('i-i-s-novyjj1-спр-сотр', 'Сотрудник', {
      фИО: attr('Сотрудник', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
