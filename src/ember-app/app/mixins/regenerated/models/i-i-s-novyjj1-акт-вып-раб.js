import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  общСтоим: DS.attr('decimal'),
  тЧАкт: DS.hasMany('i-i-s-novyjj1-т-ч-акт', { inverse: 'актВыпРаб', async: false })
});

export let ValidationRules = {
  общСтоим: {
    descriptionKey: 'models.i-i-s-novyjj1-акт-вып-раб.validations.общСтоим.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  тЧАкт: {
    descriptionKey: 'models.i-i-s-novyjj1-акт-вып-раб.validations.тЧАкт.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('АктВыпРабE', 'i-i-s-novyjj1-акт-вып-раб', {
    общСтоим: attr('Общая стоимость', { index: 0 }),
    тЧАкт: hasMany('i-i-s-novyjj1-т-ч-акт', 'Табличная часть акта выполнения работ', {
      ценаЗаЕд: attr('Цена за единицу', { index: 0 }),
      количество: attr('Количество', { index: 1 }),
      стоимость: attr('Стоимость', { index: 2 })
    })
  });

  modelClass.defineProjection('АктВыпРабL', 'i-i-s-novyjj1-акт-вып-раб', {
    общСтоим: attr('Общая стоимость', { index: 0 })
  });
};
