import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iDСотр: DS.attr('number'),
  фИО: DS.attr('string')
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
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СпрСотрE', 'i-i-s-novyjj1-спр-сотр', {
    фИО: attr('ФИО', { index: 0 }),
    iDСотр: attr('ID Сотрудника', { index: 1 })
  });

  modelClass.defineProjection('СпрСотрL', 'i-i-s-novyjj1-спр-сотр', {
    фИО: attr('ФИО', { index: 0 }),
    iDСотр: attr('ID Сотрудника', { index: 1 })
  });
};
