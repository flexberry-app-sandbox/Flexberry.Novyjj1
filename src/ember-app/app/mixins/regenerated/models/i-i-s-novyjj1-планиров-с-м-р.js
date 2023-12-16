import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаНачала: DS.attr('date'),
  датаОкончания: DS.attr('date'),
  длительность: DS.attr('number'),
  кодСДР: DS.attr('number')
});

export let ValidationRules = {
  датаНачала: {
    descriptionKey: 'models.i-i-s-novyjj1-планиров-с-м-р.validations.датаНачала.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаОкончания: {
    descriptionKey: 'models.i-i-s-novyjj1-планиров-с-м-р.validations.датаОкончания.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  длительность: {
    descriptionKey: 'models.i-i-s-novyjj1-планиров-с-м-р.validations.длительность.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  кодСДР: {
    descriptionKey: 'models.i-i-s-novyjj1-планиров-с-м-р.validations.кодСДР.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПланировСМРE', 'i-i-s-novyjj1-планиров-с-м-р', {
    кодСДР: attr('Код СДР', { index: 0 }),
    датаНачала: attr('Дата начала', { index: 1 }),
    датаОкончания: attr('Дата окончания', { index: 2 }),
    длительность: attr('Длительность', { index: 3 })
  });

  modelClass.defineProjection('ПланировСМРL', 'i-i-s-novyjj1-планиров-с-м-р', {
    кодСДР: attr('Код СДР', { index: 0 }),
    датаНачала: attr('Дата начала', { index: 1 }),
    датаОкончания: attr('Дата окончания', { index: 2 }),
    длительность: attr('Длительность', { index: 3 })
  });
};
