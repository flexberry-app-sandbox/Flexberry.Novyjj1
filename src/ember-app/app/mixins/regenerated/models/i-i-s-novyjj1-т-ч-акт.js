import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('decimal'),
  стоимость: DS.attr('decimal'),
  ценаЗаЕд: DS.attr('decimal'),
  актВыпРаб: DS.belongsTo('i-i-s-novyjj1-акт-вып-раб', { inverse: 'тЧАкт', async: false })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-novyjj1-т-ч-акт.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  стоимость: {
    descriptionKey: 'models.i-i-s-novyjj1-т-ч-акт.validations.стоимость.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  ценаЗаЕд: {
    descriptionKey: 'models.i-i-s-novyjj1-т-ч-акт.validations.ценаЗаЕд.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  актВыпРаб: {
    descriptionKey: 'models.i-i-s-novyjj1-т-ч-акт.validations.актВыпРаб.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧАктE', 'i-i-s-novyjj1-т-ч-акт', {
    ценаЗаЕд: attr('Цена за единицу', { index: 0 }),
    количество: attr('Количество', { index: 1 }),
    стоимость: attr('Стоимость', { index: 2 })
  });

  modelClass.defineProjection('ТЧАктL', 'i-i-s-novyjj1-т-ч-акт', {
    ценаЗаЕд: attr('Цена за ед', { index: 0 }),
    стоимость: attr('Стоимость', { index: 1 }),
    количество: attr('Количество', { index: 2 })
  });
};
