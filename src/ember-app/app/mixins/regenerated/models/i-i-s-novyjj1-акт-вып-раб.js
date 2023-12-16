import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  общСтоим: DS.attr('decimal')
});

export let ValidationRules = {
  общСтоим: {
    descriptionKey: 'models.i-i-s-novyjj1-акт-вып-раб.validations.общСтоим.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('АктВыпРабE', 'i-i-s-novyjj1-акт-вып-раб', {
    общСтоим: attr('Общая стоимость', { index: 0 })
  });

  modelClass.defineProjection('АктВыпРабL', 'i-i-s-novyjj1-акт-вып-раб', {
    общСтоим: attr('Общая стоимость', { index: 0 })
  });
};
