import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  колПоАкт: DS.attr('decimal'),
  колПоСме: DS.attr('decimal'),
  нормРасх: DS.attr('decimal'),
  обРабПоСм: DS.attr('decimal'),
  остПоСмет: DS.attr('decimal'),
  спрСотр: DS.belongsTo('i-i-s-novyjj1-спр-сотр', { inverse: null, async: false })
});

export let ValidationRules = {
  колПоАкт: {
    descriptionKey: 'models.i-i-s-novyjj1-от-о-рас-ос-мат.validations.колПоАкт.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  колПоСме: {
    descriptionKey: 'models.i-i-s-novyjj1-от-о-рас-ос-мат.validations.колПоСме.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  нормРасх: {
    descriptionKey: 'models.i-i-s-novyjj1-от-о-рас-ос-мат.validations.нормРасх.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  обРабПоСм: {
    descriptionKey: 'models.i-i-s-novyjj1-от-о-рас-ос-мат.validations.обРабПоСм.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  остПоСмет: {
    descriptionKey: 'models.i-i-s-novyjj1-от-о-рас-ос-мат.validations.остПоСмет.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  спрСотр: {
    descriptionKey: 'models.i-i-s-novyjj1-от-о-рас-ос-мат.validations.спрСотр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОтОРасОсМатE', 'i-i-s-novyjj1-от-о-рас-ос-мат', {
    нормРасх: attr('Норма расхода', { index: 0 }),
    колПоАкт: attr('Количество по актам', { index: 1 }),
    колПоСме: attr('Количество по смете', { index: 2 }),
    обРабПоСм: attr('Объем работ по смете', { index: 3 }),
    остПоСмет: attr('Остаток по смете', { index: 4 }),
    спрСотр: belongsTo('i-i-s-novyjj1-спр-сотр', 'Сотрудник', {
      фИО: attr('Сотрудник', { index: 6 })
    }, { index: 5 })
  });

  modelClass.defineProjection('ОтОРасОсМатL', 'i-i-s-novyjj1-от-о-рас-ос-мат', {
    нормРасх: attr('Норма расхода', { index: 0 }),
    колПоАкт: attr('Количество по актам', { index: 1 }),
    колПоСме: attr('Количество по смете', { index: 2 }),
    обРабПоСм: attr('Объем работ по смете', { index: 3 }),
    остПоСмет: attr('Остаток по смете', { index: 4 }),
    спрСотр: belongsTo('i-i-s-novyjj1-спр-сотр', 'Сотрудник', {
      фИО: attr('Сотрудник', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
