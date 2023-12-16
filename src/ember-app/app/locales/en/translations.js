import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISNovyjj1АктВыпРабLForm from './forms/i-i-s-novyjj1-акт-вып-раб-l';
import IISNovyjj1БюдСтроиLForm from './forms/i-i-s-novyjj1-бюд-строи-l';
import IISNovyjj1ДокСметаLForm from './forms/i-i-s-novyjj1-док-смета-l';
import IISNovyjj1ДокУсловДогLForm from './forms/i-i-s-novyjj1-док-услов-дог-l';
import IISNovyjj1ДолжностиLForm from './forms/i-i-s-novyjj1-должности-l';
import IISNovyjj1ЕдИзмерLForm from './forms/i-i-s-novyjj1-ед-измер-l';
import IISNovyjj1ЖурУчВыпРабLForm from './forms/i-i-s-novyjj1-жур-уч-вып-раб-l';
import IISNovyjj1НоменклатураLForm from './forms/i-i-s-novyjj1-номенклатура-l';
import IISNovyjj1ОтОРасОсМатLForm from './forms/i-i-s-novyjj1-от-о-рас-ос-мат-l';
import IISNovyjj1ПлФАнВыпРабLForm from './forms/i-i-s-novyjj1-пл-ф-ан-вып-раб-l';
import IISNovyjj1ПланировСМРLForm from './forms/i-i-s-novyjj1-планиров-с-м-р-l';
import IISNovyjj1СпрКонтрагLForm from './forms/i-i-s-novyjj1-спр-контраг-l';
import IISNovyjj1СпрСотрLForm from './forms/i-i-s-novyjj1-спр-сотр-l';
import IISNovyjj1ТЧАктLForm from './forms/i-i-s-novyjj1-т-ч-акт-l';
import IISNovyjj1ТЧСметыLForm from './forms/i-i-s-novyjj1-т-ч-сметы-l';
import IISNovyjj1АктВыпРабEForm from './forms/i-i-s-novyjj1-акт-вып-раб-e';
import IISNovyjj1БюдСтроиEForm from './forms/i-i-s-novyjj1-бюд-строи-e';
import IISNovyjj1ДокСметаEForm from './forms/i-i-s-novyjj1-док-смета-e';
import IISNovyjj1ДокУсловДогEForm from './forms/i-i-s-novyjj1-док-услов-дог-e';
import IISNovyjj1ДолжностиEForm from './forms/i-i-s-novyjj1-должности-e';
import IISNovyjj1ЕдИзмерEForm from './forms/i-i-s-novyjj1-ед-измер-e';
import IISNovyjj1ЖурУчВыпРабEForm from './forms/i-i-s-novyjj1-жур-уч-вып-раб-e';
import IISNovyjj1НоменклатураEForm from './forms/i-i-s-novyjj1-номенклатура-e';
import IISNovyjj1ОтОРасОсМатEForm from './forms/i-i-s-novyjj1-от-о-рас-ос-мат-e';
import IISNovyjj1ПлФАнВыпРабEForm from './forms/i-i-s-novyjj1-пл-ф-ан-вып-раб-e';
import IISNovyjj1ПланировСМРEForm from './forms/i-i-s-novyjj1-планиров-с-м-р-e';
import IISNovyjj1СпрКонтрагEForm from './forms/i-i-s-novyjj1-спр-контраг-e';
import IISNovyjj1СпрСотрEForm from './forms/i-i-s-novyjj1-спр-сотр-e';
import IISNovyjj1ТЧАктEForm from './forms/i-i-s-novyjj1-т-ч-акт-e';
import IISNovyjj1ТЧСметыEForm from './forms/i-i-s-novyjj1-т-ч-сметы-e';
import IISNovyjj1АктВыпРабModel from './models/i-i-s-novyjj1-акт-вып-раб';
import IISNovyjj1БюдСтроиModel from './models/i-i-s-novyjj1-бюд-строи';
import IISNovyjj1ДокСметаModel from './models/i-i-s-novyjj1-док-смета';
import IISNovyjj1ДокУсловДогModel from './models/i-i-s-novyjj1-док-услов-дог';
import IISNovyjj1ДолжностиModel from './models/i-i-s-novyjj1-должности';
import IISNovyjj1ЕдИзмерModel from './models/i-i-s-novyjj1-ед-измер';
import IISNovyjj1ЖурУчВыпРабModel from './models/i-i-s-novyjj1-жур-уч-вып-раб';
import IISNovyjj1НоменклатураModel from './models/i-i-s-novyjj1-номенклатура';
import IISNovyjj1ОтОРасОсМатModel from './models/i-i-s-novyjj1-от-о-рас-ос-мат';
import IISNovyjj1ПлФАнВыпРабModel from './models/i-i-s-novyjj1-пл-ф-ан-вып-раб';
import IISNovyjj1ПланировСМРModel from './models/i-i-s-novyjj1-планиров-с-м-р';
import IISNovyjj1СпрКонтрагModel from './models/i-i-s-novyjj1-спр-контраг';
import IISNovyjj1СпрСотрModel from './models/i-i-s-novyjj1-спр-сотр';
import IISNovyjj1ТЧАктModel from './models/i-i-s-novyjj1-т-ч-акт';
import IISNovyjj1ТЧСметыModel from './models/i-i-s-novyjj1-т-ч-сметы';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-novyjj1-акт-вып-раб': IISNovyjj1АктВыпРабModel,
    'i-i-s-novyjj1-бюд-строи': IISNovyjj1БюдСтроиModel,
    'i-i-s-novyjj1-док-смета': IISNovyjj1ДокСметаModel,
    'i-i-s-novyjj1-док-услов-дог': IISNovyjj1ДокУсловДогModel,
    'i-i-s-novyjj1-должности': IISNovyjj1ДолжностиModel,
    'i-i-s-novyjj1-ед-измер': IISNovyjj1ЕдИзмерModel,
    'i-i-s-novyjj1-жур-уч-вып-раб': IISNovyjj1ЖурУчВыпРабModel,
    'i-i-s-novyjj1-номенклатура': IISNovyjj1НоменклатураModel,
    'i-i-s-novyjj1-от-о-рас-ос-мат': IISNovyjj1ОтОРасОсМатModel,
    'i-i-s-novyjj1-пл-ф-ан-вып-раб': IISNovyjj1ПлФАнВыпРабModel,
    'i-i-s-novyjj1-планиров-с-м-р': IISNovyjj1ПланировСМРModel,
    'i-i-s-novyjj1-спр-контраг': IISNovyjj1СпрКонтрагModel,
    'i-i-s-novyjj1-спр-сотр': IISNovyjj1СпрСотрModel,
    'i-i-s-novyjj1-т-ч-акт': IISNovyjj1ТЧАктModel,
    'i-i-s-novyjj1-т-ч-сметы': IISNovyjj1ТЧСметыModel
  },

  'application-name': 'Novyjj1',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Novyjj1',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Novyjj1',
          title: 'Novyjj1'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        novyjj1: {
          caption: 'Novyjj1',
          title: 'Novyjj1',
          'i-i-s-novyjj1-должности-l': {
            caption: 'Справочник должности',
            title: ''
          },
          'i-i-s-novyjj1-пл-ф-ан-вып-раб-l': {
            caption: 'План фактный анализ выполнения работ',
            title: ''
          },
          'i-i-s-novyjj1-планиров-с-м-р-l': {
            caption: 'Планирование СМР',
            title: ''
          },
          'i-i-s-novyjj1-жур-уч-вып-раб-l': {
            caption: 'Журнал учета выполнения работа',
            title: ''
          },
          'i-i-s-novyjj1-бюд-строи-l': {
            caption: 'Бюджет строительства',
            title: ''
          },
          'i-i-s-novyjj1-номенклатура-l': {
            caption: 'Справочник номенклатура',
            title: ''
          },
          'i-i-s-novyjj1-спр-контраг-l': {
            caption: 'Справочник контрагенты',
            title: ''
          },
          'i-i-s-novyjj1-спр-сотр-l': {
            caption: 'Справочник сотрудники',
            title: ''
          },
          'i-i-s-novyjj1-т-ч-сметы-l': {
            caption: 'Табличная часть сметы',
            title: ''
          },
          'i-i-s-novyjj1-акт-вып-раб-l': {
            caption: 'Акт выполнения работ',
            title: ''
          },
          'i-i-s-novyjj1-от-о-рас-ос-мат-l': {
            caption: 'Отчет о расхода основных материалов',
            title: ''
          },
          'i-i-s-novyjj1-ед-измер-l': {
            caption: 'Справочник единицы измерения',
            title: ''
          },
          'i-i-s-novyjj1-т-ч-акт-l': {
            caption: 'Табличная часть акта выполнения работ',
            title: ''
          },
          'i-i-s-novyjj1-док-смета-l': {
            caption: 'Документ смета',
            title: ''
          },
          'i-i-s-novyjj1-док-услов-дог-l': {
            caption: 'Докмент условия договора',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-novyjj1-акт-вып-раб-l': IISNovyjj1АктВыпРабLForm,
    'i-i-s-novyjj1-бюд-строи-l': IISNovyjj1БюдСтроиLForm,
    'i-i-s-novyjj1-док-смета-l': IISNovyjj1ДокСметаLForm,
    'i-i-s-novyjj1-док-услов-дог-l': IISNovyjj1ДокУсловДогLForm,
    'i-i-s-novyjj1-должности-l': IISNovyjj1ДолжностиLForm,
    'i-i-s-novyjj1-ед-измер-l': IISNovyjj1ЕдИзмерLForm,
    'i-i-s-novyjj1-жур-уч-вып-раб-l': IISNovyjj1ЖурУчВыпРабLForm,
    'i-i-s-novyjj1-номенклатура-l': IISNovyjj1НоменклатураLForm,
    'i-i-s-novyjj1-от-о-рас-ос-мат-l': IISNovyjj1ОтОРасОсМатLForm,
    'i-i-s-novyjj1-пл-ф-ан-вып-раб-l': IISNovyjj1ПлФАнВыпРабLForm,
    'i-i-s-novyjj1-планиров-с-м-р-l': IISNovyjj1ПланировСМРLForm,
    'i-i-s-novyjj1-спр-контраг-l': IISNovyjj1СпрКонтрагLForm,
    'i-i-s-novyjj1-спр-сотр-l': IISNovyjj1СпрСотрLForm,
    'i-i-s-novyjj1-т-ч-акт-l': IISNovyjj1ТЧАктLForm,
    'i-i-s-novyjj1-т-ч-сметы-l': IISNovyjj1ТЧСметыLForm,
    'i-i-s-novyjj1-акт-вып-раб-e': IISNovyjj1АктВыпРабEForm,
    'i-i-s-novyjj1-бюд-строи-e': IISNovyjj1БюдСтроиEForm,
    'i-i-s-novyjj1-док-смета-e': IISNovyjj1ДокСметаEForm,
    'i-i-s-novyjj1-док-услов-дог-e': IISNovyjj1ДокУсловДогEForm,
    'i-i-s-novyjj1-должности-e': IISNovyjj1ДолжностиEForm,
    'i-i-s-novyjj1-ед-измер-e': IISNovyjj1ЕдИзмерEForm,
    'i-i-s-novyjj1-жур-уч-вып-раб-e': IISNovyjj1ЖурУчВыпРабEForm,
    'i-i-s-novyjj1-номенклатура-e': IISNovyjj1НоменклатураEForm,
    'i-i-s-novyjj1-от-о-рас-ос-мат-e': IISNovyjj1ОтОРасОсМатEForm,
    'i-i-s-novyjj1-пл-ф-ан-вып-раб-e': IISNovyjj1ПлФАнВыпРабEForm,
    'i-i-s-novyjj1-планиров-с-м-р-e': IISNovyjj1ПланировСМРEForm,
    'i-i-s-novyjj1-спр-контраг-e': IISNovyjj1СпрКонтрагEForm,
    'i-i-s-novyjj1-спр-сотр-e': IISNovyjj1СпрСотрEForm,
    'i-i-s-novyjj1-т-ч-акт-e': IISNovyjj1ТЧАктEForm,
    'i-i-s-novyjj1-т-ч-сметы-e': IISNovyjj1ТЧСметыEForm
  },

});

export default translations;
