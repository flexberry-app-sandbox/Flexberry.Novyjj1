import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодНаим: DS.attr('number'),
  наимРабот: DS.attr('string')
});

export let ValidationRules = {
  кодНаим: {
    descriptionKey: 'models.i-i-s-novyjj1-номенклатура.validations.кодНаим.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наимРабот: {
    descriptionKey: 'models.i-i-s-novyjj1-номенклатура.validations.наимРабот.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('НоменклатураE', 'i-i-s-novyjj1-номенклатура', {
    кодНаим: attr('Код наименования', { index: 0 }),
    наимРабот: attr('Номенклатура', { index: 1 })
  });

  modelClass.defineProjection('НоменклатураL', 'i-i-s-novyjj1-номенклатура', {
    кодНаим: attr('Код наименования', { index: 0 }),
    наимРабот: attr('Номенклатура', { index: 1 })
  });
};
