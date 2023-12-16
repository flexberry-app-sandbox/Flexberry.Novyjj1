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
  едИзмер: DS.belongsTo('i-i-s-novyjj1-ед-измер', { inverse: null, async: false }),
  номенклатура: DS.belongsTo('i-i-s-novyjj1-номенклатура', { inverse: null, async: false }),
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
  едИзмер: {
    descriptionKey: 'models.i-i-s-novyjj1-от-о-рас-ос-мат.validations.едИзмер.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  номенклатура: {
    descriptionKey: 'models.i-i-s-novyjj1-от-о-рас-ос-мат.validations.номенклатура.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
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
    номенклатура: belongsTo('i-i-s-novyjj1-номенклатура', 'Номенклатура', {
      наимРабот: attr('Номенклатура', { index: 1 })
    }, { index: 0 }),
    едИзмер: belongsTo('i-i-s-novyjj1-ед-измер', 'Единицы измерения', {
      наименование: attr('Единицы измерения', { index: 3 })
    }, { index: 2 }),
    нормРасх: attr('Норма расхода', { index: 4 }),
    колПоАкт: attr('Количество по актам', { index: 5 }),
    колПоСме: attr('Количество по смете', { index: 6 }),
    обРабПоСм: attr('Объем работ по смете', { index: 7 }),
    остПоСмет: attr('Остаток по смете', { index: 8 }),
    спрСотр: belongsTo('i-i-s-novyjj1-спр-сотр', 'Сотрудник', {
      фИО: attr('Сотрудник', { index: 10 })
    }, { index: 9 })
  });

  modelClass.defineProjection('ОтОРасОсМатL', 'i-i-s-novyjj1-от-о-рас-ос-мат', {
    номенклатура: belongsTo('i-i-s-novyjj1-номенклатура', 'Номенклатура', {
      наимРабот: attr('Номенклатура', { index: 0 })
    }, { index: -1, hidden: true }),
    едИзмер: belongsTo('i-i-s-novyjj1-ед-измер', 'Единицы измерения', {
      наименование: attr('Единицы измерения', { index: 1 })
    }, { index: -1, hidden: true }),
    нормРасх: attr('Норма расхода', { index: 2 }),
    колПоАкт: attr('Количество по актам', { index: 3 }),
    колПоСме: attr('Количество по смете', { index: 4 }),
    обРабПоСм: attr('Объем работ по смете', { index: 5 }),
    остПоСмет: attr('Остаток по смете', { index: 6 }),
    спрСотр: belongsTo('i-i-s-novyjj1-спр-сотр', 'Сотрудник', {
      фИО: attr('Сотрудник', { index: 7 })
    }, { index: -1, hidden: true })
  });
};
