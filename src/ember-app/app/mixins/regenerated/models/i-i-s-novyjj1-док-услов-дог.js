import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаНач: DS.attr('date'),
  датаОконч: DS.attr('date'),
  длительн: DS.attr('number'),
  объем: DS.attr('decimal')
});

export let ValidationRules = {
  датаНач: {
    descriptionKey: 'models.i-i-s-novyjj1-док-услов-дог.validations.датаНач.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаОконч: {
    descriptionKey: 'models.i-i-s-novyjj1-док-услов-дог.validations.датаОконч.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  длительн: {
    descriptionKey: 'models.i-i-s-novyjj1-док-услов-дог.validations.длительн.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  объем: {
    descriptionKey: 'models.i-i-s-novyjj1-док-услов-дог.validations.объем.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДокУсловДогE', 'i-i-s-novyjj1-док-услов-дог', {
    объем: attr('Объем', { index: 0 }),
    датаНач: attr('Дата начала', { index: 1 }),
    датаОконч: attr('Дата окончания', { index: 2 }),
    длительн: attr('Длительность', { index: 3 })
  });

  modelClass.defineProjection('ДокУсловДогL', 'i-i-s-novyjj1-док-услов-дог', {
    объем: attr('Объем', { index: 0 }),
    датаНач: attr('Дата начала', { index: 1 }),
    датаОконч: attr('Дата окончания', { index: 2 }),
    длительн: attr('Длительность', { index: 3 })
  });
};
