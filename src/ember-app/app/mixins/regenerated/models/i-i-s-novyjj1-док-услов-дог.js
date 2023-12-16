import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаНач: DS.attr('date'),
  датаОконч: DS.attr('date'),
  длительн: DS.attr('number'),
  объем: DS.attr('decimal'),
  номенклатура: DS.belongsTo('i-i-s-novyjj1-номенклатура', { inverse: null, async: false }),
  спрКонтраг: DS.belongsTo('i-i-s-novyjj1-спр-контраг', { inverse: null, async: false })
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
  номенклатура: {
    descriptionKey: 'models.i-i-s-novyjj1-док-услов-дог.validations.номенклатура.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  спрКонтраг: {
    descriptionKey: 'models.i-i-s-novyjj1-док-услов-дог.validations.спрКонтраг.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДокУсловДогE', 'i-i-s-novyjj1-док-услов-дог', {
    номенклатура: belongsTo('i-i-s-novyjj1-номенклатура', 'Номенклатура', {
      наимРабот: attr('Номенклатура', { index: 1 })
    }, { index: 0 }),
    объем: attr('Объем', { index: 2 }),
    датаНач: attr('Дата начала', { index: 3 }),
    датаОконч: attr('Дата окончания', { index: 4 }),
    длительн: attr('Длительность', { index: 5 }),
    спрКонтраг: belongsTo('i-i-s-novyjj1-спр-контраг', 'Контрагент', {
      наименование: attr('Контрагент', { index: 7 })
    }, { index: 6 })
  });

  modelClass.defineProjection('ДокУсловДогL', 'i-i-s-novyjj1-док-услов-дог', {
    номенклатура: belongsTo('i-i-s-novyjj1-номенклатура', 'Номенклатура', {
      наимРабот: attr('Номенклатура', { index: 0 })
    }, { index: -1, hidden: true }),
    объем: attr('Объем', { index: 1 }),
    датаНач: attr('Дата начала', { index: 2 }),
    датаОконч: attr('Дата окончания', { index: 3 }),
    длительн: attr('Длительность', { index: 4 }),
    спрКонтраг: belongsTo('i-i-s-novyjj1-спр-контраг', 'Контрагент', {
      наименование: attr('Контрагент', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
