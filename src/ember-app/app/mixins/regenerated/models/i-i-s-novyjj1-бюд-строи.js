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
  стоимИто: DS.attr('decimal')
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
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('БюдСтроиE', 'i-i-s-novyjj1-бюд-строи', {
    объем: attr('Объем', { index: 0 }),
    начРаб: attr('Начала работ', { index: 1 }),
    окоРаб: attr('Окончания работ', { index: 2 }),
    длите: attr('Длительность', { index: 3 }),
    базСт: attr('Базовая стоимость', { index: 4 }),
    стоимИто: attr('Стоимость итого', { index: 5 })
  });

  modelClass.defineProjection('БюдСтроиL', 'i-i-s-novyjj1-бюд-строи', {
    объем: attr('Объем', { index: 0 }),
    начРаб: attr('Начало работ', { index: 1 }),
    окоРаб: attr('Окончания работ', { index: 2 }),
    длите: attr('Длительность', { index: 3 }),
    базСт: attr('Базовая стоимость', { index: 4 }),
    стоимИто: attr('Стоимость итого', { index: 5 })
  });
};
