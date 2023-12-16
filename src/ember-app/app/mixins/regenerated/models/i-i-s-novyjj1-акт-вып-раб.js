import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  общСтоим: DS.attr('decimal'),
  спрКонтраг: DS.belongsTo('i-i-s-novyjj1-спр-контраг', { inverse: null, async: false }),
  спрСотр: DS.belongsTo('i-i-s-novyjj1-спр-сотр', { inverse: null, async: false }),
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
  спрКонтраг: {
    descriptionKey: 'models.i-i-s-novyjj1-акт-вып-раб.validations.спрКонтраг.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  спрСотр: {
    descriptionKey: 'models.i-i-s-novyjj1-акт-вып-раб.validations.спрСотр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
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
    спрСотр: belongsTo('i-i-s-novyjj1-спр-сотр', 'Сотрудник', {
      фИО: attr('Сотрудник', { index: 2 })
    }, { index: 1 }),
    спрКонтраг: belongsTo('i-i-s-novyjj1-спр-контраг', 'Контрагент', {
      наименование: attr('Контрагент', { index: 4 })
    }, { index: 3 }),
    тЧАкт: hasMany('i-i-s-novyjj1-т-ч-акт', 'Табличная часть акта выполнения работ', {
      едИзмер: belongsTo('i-i-s-novyjj1-ед-измер', 'Единицы измерения', {
        наименование: attr('Единицы измерения', { index: 1 })
      }, { index: 0 }),
      ценаЗаЕд: attr('Цена за единицу', { index: 2 }),
      количество: attr('Количество', { index: 3 }),
      стоимость: attr('Стоимость', { index: 4 })
    })
  });

  modelClass.defineProjection('АктВыпРабL', 'i-i-s-novyjj1-акт-вып-раб', {
    общСтоим: attr('Общая стоимость', { index: 0 }),
    спрСотр: belongsTo('i-i-s-novyjj1-спр-сотр', 'Сотрудник', {
      фИО: attr('Сотрудник', { index: 1 })
    }, { index: -1, hidden: true }),
    спрКонтраг: belongsTo('i-i-s-novyjj1-спр-контраг', 'Контрагент', {
      наименование: attr('Контрагент', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
