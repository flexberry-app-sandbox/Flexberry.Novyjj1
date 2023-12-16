import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('decimal'),
  стоимость: DS.attr('decimal'),
  ценаЗаЕд: DS.attr('decimal'),
  едИзмер: DS.belongsTo('i-i-s-novyjj1-ед-измер', { inverse: null, async: false }),
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
  едИзмер: {
    descriptionKey: 'models.i-i-s-novyjj1-т-ч-акт.validations.едИзмер.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
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
    едИзмер: belongsTo('i-i-s-novyjj1-ед-измер', 'Единицы измерения', {
      наименование: attr('Единицы измерения', { index: 1 })
    }, { index: 0 }),
    ценаЗаЕд: attr('Цена за единицу', { index: 2 }),
    количество: attr('Количество', { index: 3 }),
    стоимость: attr('Стоимость', { index: 4 })
  });

  modelClass.defineProjection('ТЧАктL', 'i-i-s-novyjj1-т-ч-акт', {
    едИзмер: belongsTo('i-i-s-novyjj1-ед-измер', 'Единицы измерения', {
      наименование: attr('Единицы измерения', { index: 0 })
    }, { index: -1, hidden: true }),
    ценаЗаЕд: attr('Цена за ед', { index: 1 }),
    стоимость: attr('Стоимость', { index: 2 }),
    количество: attr('Количество', { index: 3 })
  });
};
