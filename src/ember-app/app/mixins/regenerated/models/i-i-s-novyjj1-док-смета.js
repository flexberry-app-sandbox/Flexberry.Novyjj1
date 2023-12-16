import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номСмеРас: DS.attr('number'),
  общСметСт: DS.attr('decimal')
});

export let ValidationRules = {
  номСмеРас: {
    descriptionKey: 'models.i-i-s-novyjj1-док-смета.validations.номСмеРас.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  общСметСт: {
    descriptionKey: 'models.i-i-s-novyjj1-док-смета.validations.общСметСт.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДокСметаE', 'i-i-s-novyjj1-док-смета', {
    номСмеРас: attr('Номер сметных расчетов', { index: 0 }),
    общСметСт: attr('Общая сметная стоимость', { index: 1 })
  });

  modelClass.defineProjection('ДокСметаL', 'i-i-s-novyjj1-док-смета', {
    номСмеРас: attr('Номер сметных расчетов', { index: 0 }),
    общСметСт: attr('Общая сметная стоимость', { index: 1 })
  });
};
