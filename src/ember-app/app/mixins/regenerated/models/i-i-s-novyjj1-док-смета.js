import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номСмеРас: DS.attr('number'),
  общСметСт: DS.attr('decimal'),
  тЧСметы: DS.hasMany('i-i-s-novyjj1-т-ч-сметы', { inverse: 'докСмета', async: false })
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
  тЧСметы: {
    descriptionKey: 'models.i-i-s-novyjj1-док-смета.validations.тЧСметы.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДокСметаE', 'i-i-s-novyjj1-док-смета', {
    номСмеРас: attr('Номер сметных расчетов', { index: 0 }),
    общСметСт: attr('Общая сметная стоимость', { index: 1 }),
    тЧСметы: hasMany('i-i-s-novyjj1-т-ч-сметы', 'Табличная часть сметы', {
      стСтроиРаб: attr('Стоимость строительных работ', { index: 0 }),
      стМонтРаб: attr('Стоимость монтажных работ', { index: 1 }),
      стОборуд: attr('Стоимость оборудования', { index: 2 })
    })
  });

  modelClass.defineProjection('ДокСметаL', 'i-i-s-novyjj1-док-смета', {
    номСмеРас: attr('Номер сметных расчетов', { index: 0 }),
    общСметСт: attr('Общая сметная стоимость', { index: 1 })
  });
};
