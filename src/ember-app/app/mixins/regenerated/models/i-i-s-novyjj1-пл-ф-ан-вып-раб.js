import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  всегоОб: DS.attr('decimal'),
  всегоСум: DS.attr('decimal'),
  выпОб: DS.attr('decimal'),
  выпСум: DS.attr('decimal'),
  планОб: DS.attr('decimal'),
  планСум: DS.attr('decimal'),
  реализовОб: DS.attr('decimal'),
  реализоСум: DS.attr('decimal'),
  спрСотр: DS.belongsTo('i-i-s-novyjj1-спр-сотр', { inverse: null, async: false })
});

export let ValidationRules = {
  всегоОб: {
    descriptionKey: 'models.i-i-s-novyjj1-пл-ф-ан-вып-раб.validations.всегоОб.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  всегоСум: {
    descriptionKey: 'models.i-i-s-novyjj1-пл-ф-ан-вып-раб.validations.всегоСум.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  выпОб: {
    descriptionKey: 'models.i-i-s-novyjj1-пл-ф-ан-вып-раб.validations.выпОб.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  выпСум: {
    descriptionKey: 'models.i-i-s-novyjj1-пл-ф-ан-вып-раб.validations.выпСум.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  планОб: {
    descriptionKey: 'models.i-i-s-novyjj1-пл-ф-ан-вып-раб.validations.планОб.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  планСум: {
    descriptionKey: 'models.i-i-s-novyjj1-пл-ф-ан-вып-раб.validations.планСум.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  реализовОб: {
    descriptionKey: 'models.i-i-s-novyjj1-пл-ф-ан-вып-раб.validations.реализовОб.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  реализоСум: {
    descriptionKey: 'models.i-i-s-novyjj1-пл-ф-ан-вып-раб.validations.реализоСум.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  спрСотр: {
    descriptionKey: 'models.i-i-s-novyjj1-пл-ф-ан-вып-раб.validations.спрСотр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПлФАнВыпРабE', 'i-i-s-novyjj1-пл-ф-ан-вып-раб', {
    планОб: attr('План объем', { index: 0 }),
    планСум: attr('План сумма', { index: 1 }),
    реализовОб: attr('Реализовано объем', { index: 2 }),
    реализоСум: attr('Реализовано сумма', { index: 3 }),
    выпОб: attr('Выполнено объем', { index: 4 }),
    выпСум: attr('Выполнено сумма', { index: 5 }),
    всегоОб: attr('Всего объем', { index: 6 }),
    всегоСум: attr('Всего сумма', { index: 7 }),
    спрСотр: belongsTo('i-i-s-novyjj1-спр-сотр', 'Сотрудник', {
      фИО: attr('Сотрудник', { index: 9 })
    }, { index: 8 })
  });

  modelClass.defineProjection('ПлФАнВыпРабL', 'i-i-s-novyjj1-пл-ф-ан-вып-раб', {
    планОб: attr('План объем', { index: 0 }),
    планСум: attr('План сумма', { index: 1 }),
    реализовОб: attr('Реализовано объем', { index: 2 }),
    реализоСум: attr('Реализовано сумма', { index: 3 }),
    выпОб: attr('Выполнено объем', { index: 4 }),
    выпСум: attr('Выполнено сумма', { index: 5 }),
    всегоОб: attr('Всего объем', { index: 6 }),
    всегоСум: attr('Всего сумма', { index: 7 }),
    спрСотр: belongsTo('i-i-s-novyjj1-спр-сотр', 'Сотрудник', {
      фИО: attr('Сотрудник', { index: 8 })
    }, { index: -1, hidden: true })
  });
};
