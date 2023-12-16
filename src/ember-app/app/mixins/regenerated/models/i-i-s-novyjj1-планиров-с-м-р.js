import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаНачала: DS.attr('date'),
  датаОкончания: DS.attr('date'),
  длительность: DS.attr('number'),
  кодСДР: DS.attr('number'),
  номенклатура: DS.belongsTo('i-i-s-novyjj1-номенклатура', { inverse: null, async: false })
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
  номенклатура: {
    descriptionKey: 'models.i-i-s-novyjj1-планиров-с-м-р.validations.номенклатура.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПланировСМРE', 'i-i-s-novyjj1-планиров-с-м-р', {
    номенклатура: belongsTo('i-i-s-novyjj1-номенклатура', 'Номенклатура', {
      наимРабот: attr('Номенклатура', { index: 1 })
    }, { index: 0 }),
    кодСДР: attr('Код СДР', { index: 2 }),
    датаНачала: attr('Дата начала', { index: 3 }),
    датаОкончания: attr('Дата окончания', { index: 4 }),
    длительность: attr('Длительность', { index: 5 })
  });

  modelClass.defineProjection('ПланировСМРL', 'i-i-s-novyjj1-планиров-с-м-р', {
    номенклатура: belongsTo('i-i-s-novyjj1-номенклатура', 'Номенклатура', {
      наимРабот: attr('Номенклатура', { index: 0 })
    }, { index: -1, hidden: true }),
    кодСДР: attr('Код СДР', { index: 1 }),
    датаНачала: attr('Дата начала', { index: 2 }),
    датаОкончания: attr('Дата окончания', { index: 3 }),
    длительность: attr('Длительность', { index: 4 })
  });
};
