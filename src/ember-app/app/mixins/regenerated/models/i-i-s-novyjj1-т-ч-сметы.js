import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  стМонтРаб: DS.attr('decimal'),
  стОборуд: DS.attr('decimal'),
  стСтроиРаб: DS.attr('decimal'),
  докСмета: DS.belongsTo('i-i-s-novyjj1-док-смета', { inverse: 'тЧСметы', async: false })
});

export let ValidationRules = {
  стМонтРаб: {
    descriptionKey: 'models.i-i-s-novyjj1-т-ч-сметы.validations.стМонтРаб.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  стОборуд: {
    descriptionKey: 'models.i-i-s-novyjj1-т-ч-сметы.validations.стОборуд.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  стСтроиРаб: {
    descriptionKey: 'models.i-i-s-novyjj1-т-ч-сметы.validations.стСтроиРаб.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  докСмета: {
    descriptionKey: 'models.i-i-s-novyjj1-т-ч-сметы.validations.докСмета.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧСметыE', 'i-i-s-novyjj1-т-ч-сметы', {
    стСтроиРаб: attr('Стоимость строительных работ', { index: 0 }),
    стМонтРаб: attr('Стоимость монтажных работ', { index: 1 }),
    стОборуд: attr('Стоимость оборудования', { index: 2 })
  });

  modelClass.defineProjection('ТЧСметыL', 'i-i-s-novyjj1-т-ч-сметы', {
    стСтроиРаб: attr('Ст строи раб', { index: 0 }),
    стМонтРаб: attr('Ст монт раб', { index: 1 }),
    стОборуд: attr('Ст оборуд', { index: 2 })
  });
};
