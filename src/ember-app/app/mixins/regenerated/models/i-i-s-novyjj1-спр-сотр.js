import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iDСотр: DS.attr('number'),
  фИО: DS.attr('string'),
  должности: DS.belongsTo('i-i-s-novyjj1-должности', { inverse: null, async: false })
});

export let ValidationRules = {
  iDСотр: {
    descriptionKey: 'models.i-i-s-novyjj1-спр-сотр.validations.iDСотр.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-novyjj1-спр-сотр.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должности: {
    descriptionKey: 'models.i-i-s-novyjj1-спр-сотр.validations.должности.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СпрСотрE', 'i-i-s-novyjj1-спр-сотр', {
    фИО: attr('ФИО', { index: 0 }),
    iDСотр: attr('ID Сотрудника', { index: 1 }),
    должности: belongsTo('i-i-s-novyjj1-должности', 'Должность', {
      наимен: attr('Должность', { index: 3 })
    }, { index: 2 })
  });

  modelClass.defineProjection('СпрСотрL', 'i-i-s-novyjj1-спр-сотр', {
    фИО: attr('ФИО', { index: 0 }),
    iDСотр: attr('ID Сотрудника', { index: 1 }),
    должности: belongsTo('i-i-s-novyjj1-должности', 'Должность', {
      наимен: attr('Должность', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
