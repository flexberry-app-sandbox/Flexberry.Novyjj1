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
    выпОбРаб: attr('Выполнение объема работ', { index: 0 }),
    перВыпС: attr('Дата начала выполнения работ', { index: 1 }),
    перВыпПо: attr('Дата окончания выполнения работ', { index: 2 }),
    длит: attr('Длительность', { index: 3 }),
    спрСотр: belongsTo('i-i-s-novyjj1-спр-сотр', 'Сотрудник', {
      фИО: attr('Сотрудник', { index: 5 })
    }, { index: 4 })
  });

  modelClass.defineProjection('ЖурУчВыпРабL', 'i-i-s-novyjj1-жур-уч-вып-раб', {
    выпОбРаб: attr('Выполнение объема работ', { index: 0 }),
    перВыпС: attr('Дата начала выполнения работ', { index: 1 }),
    перВыпПо: attr('Дата окончания выполнения работ', { index: 2 }),
    длит: attr('Длительность', { index: 3 }),
    спрСотр: belongsTo('i-i-s-novyjj1-спр-сотр', 'Сотрудник', {
      фИО: attr('Сотрудник', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
