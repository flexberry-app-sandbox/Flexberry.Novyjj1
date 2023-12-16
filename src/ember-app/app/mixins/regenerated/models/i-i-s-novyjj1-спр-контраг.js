import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  иНН: DS.attr('number'),
  код: DS.attr('number'),
  кПП: DS.attr('number'),
  наименование: DS.attr('string'),
  оГРН: DS.attr('number'),
  телефон: DS.attr('number')
});

export let ValidationRules = {
  иНН: {
    descriptionKey: 'models.i-i-s-novyjj1-спр-контраг.validations.иНН.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  код: {
    descriptionKey: 'models.i-i-s-novyjj1-спр-контраг.validations.код.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  кПП: {
    descriptionKey: 'models.i-i-s-novyjj1-спр-контраг.validations.кПП.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-novyjj1-спр-контраг.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  оГРН: {
    descriptionKey: 'models.i-i-s-novyjj1-спр-контраг.validations.оГРН.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-novyjj1-спр-контраг.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СпрКонтрагE', 'i-i-s-novyjj1-спр-контраг', {
    код: attr('Код', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    иНН: attr('ИНН', { index: 2 }),
    кПП: attr('КПП', { index: 3 }),
    оГРН: attr('ОГРН', { index: 4 }),
    телефон: attr('Телефон', { index: 5 })
  });

  modelClass.defineProjection('СпрКонтрагL', 'i-i-s-novyjj1-спр-контраг', {
    код: attr('Код', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    иНН: attr('ИНН', { index: 2 }),
    кПП: attr('КПП', { index: 3 }),
    оГРН: attr('ОГРН', { index: 4 }),
    телефон: attr('Телефон', { index: 5 })
  });
};
