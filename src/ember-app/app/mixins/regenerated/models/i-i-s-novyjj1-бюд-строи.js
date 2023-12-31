import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  базСт: DS.attr('decimal'),
  длите: DS.attr('number'),
  начРаб: DS.attr('date'),
  объем: DS.attr('decimal'),
  окоРаб: DS.attr('date'),
  стоимИто: DS.attr('decimal'),
  едИзмер: DS.belongsTo('i-i-s-novyjj1-ед-измер', { inverse: null, async: false }),
  номенклатура: DS.belongsTo('i-i-s-novyjj1-номенклатура', { inverse: null, async: false })
});

export let ValidationRules = {
  базСт: {
    descriptionKey: 'models.i-i-s-novyjj1-бюд-строи.validations.базСт.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  длите: {
    descriptionKey: 'models.i-i-s-novyjj1-бюд-строи.validations.длите.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  начРаб: {
    descriptionKey: 'models.i-i-s-novyjj1-бюд-строи.validations.начРаб.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  объем: {
    descriptionKey: 'models.i-i-s-novyjj1-бюд-строи.validations.объем.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  окоРаб: {
    descriptionKey: 'models.i-i-s-novyjj1-бюд-строи.validations.окоРаб.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  стоимИто: {
    descriptionKey: 'models.i-i-s-novyjj1-бюд-строи.validations.стоимИто.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  едИзмер: {
    descriptionKey: 'models.i-i-s-novyjj1-бюд-строи.validations.едИзмер.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  номенклатура: {
    descriptionKey: 'models.i-i-s-novyjj1-бюд-строи.validations.номенклатура.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('БюдСтроиE', 'i-i-s-novyjj1-бюд-строи', {
    номенклатура: belongsTo('i-i-s-novyjj1-номенклатура', 'Номенклатура', {
      наимРабот: attr('Номенклатура', { index: 1 })
    }, { index: 0 }),
    едИзмер: belongsTo('i-i-s-novyjj1-ед-измер', 'Единицы измерения', {
      наименование: attr('Единицы измерения', { index: 3 })
    }, { index: 2 }),
    объем: attr('Объем', { index: 4 }),
    начРаб: attr('Начала работ', { index: 5 }),
    окоРаб: attr('Окончания работ', { index: 6 }),
    длите: attr('Длительность', { index: 7 }),
    базСт: attr('Базовая стоимость', { index: 8 }),
    стоимИто: attr('Стоимость итого', { index: 9 })
  });

  modelClass.defineProjection('БюдСтроиL', 'i-i-s-novyjj1-бюд-строи', {
    номенклатура: belongsTo('i-i-s-novyjj1-номенклатура', 'Номенклатура', {
      наимРабот: attr('Номенклатура', { index: 0 })
    }, { index: -1, hidden: true }),
    едИзмер: belongsTo('i-i-s-novyjj1-ед-измер', 'Единицы измерения', {
      наименование: attr('Единицы измерения', { index: 1 })
    }, { index: -1, hidden: true }),
    объем: attr('Объем', { index: 2 }),
    начРаб: attr('Начало работ', { index: 3 }),
    окоРаб: attr('Окончания работ', { index: 4 }),
    длите: attr('Длительность', { index: 5 }),
    базСт: attr('Базовая стоимость', { index: 6 }),
    стоимИто: attr('Стоимость итого', { index: 7 })
  });
};
