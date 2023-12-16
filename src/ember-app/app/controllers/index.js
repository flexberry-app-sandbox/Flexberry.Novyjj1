import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.novyjj1.caption'),
          title: i18n.t('forms.application.sitemap.novyjj1.title'),
          children: [{
            link: 'i-i-s-novyjj1-должности-l',
            caption: i18n.t('forms.application.sitemap.novyjj1.i-i-s-novyjj1-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.novyjj1.i-i-s-novyjj1-должности-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-novyjj1-пл-ф-ан-вып-раб-l',
            caption: i18n.t('forms.application.sitemap.novyjj1.i-i-s-novyjj1-пл-ф-ан-вып-раб-l.caption'),
            title: i18n.t('forms.application.sitemap.novyjj1.i-i-s-novyjj1-пл-ф-ан-вып-раб-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-novyjj1-планиров-с-м-р-l',
            caption: i18n.t('forms.application.sitemap.novyjj1.i-i-s-novyjj1-планиров-с-м-р-l.caption'),
            title: i18n.t('forms.application.sitemap.novyjj1.i-i-s-novyjj1-планиров-с-м-р-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-novyjj1-жур-уч-вып-раб-l',
            caption: i18n.t('forms.application.sitemap.novyjj1.i-i-s-novyjj1-жур-уч-вып-раб-l.caption'),
            title: i18n.t('forms.application.sitemap.novyjj1.i-i-s-novyjj1-жур-уч-вып-раб-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-novyjj1-бюд-строи-l',
            caption: i18n.t('forms.application.sitemap.novyjj1.i-i-s-novyjj1-бюд-строи-l.caption'),
            title: i18n.t('forms.application.sitemap.novyjj1.i-i-s-novyjj1-бюд-строи-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-novyjj1-номенклатура-l',
            caption: i18n.t('forms.application.sitemap.novyjj1.i-i-s-novyjj1-номенклатура-l.caption'),
            title: i18n.t('forms.application.sitemap.novyjj1.i-i-s-novyjj1-номенклатура-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-novyjj1-спр-контраг-l',
            caption: i18n.t('forms.application.sitemap.novyjj1.i-i-s-novyjj1-спр-контраг-l.caption'),
            title: i18n.t('forms.application.sitemap.novyjj1.i-i-s-novyjj1-спр-контраг-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-novyjj1-спр-сотр-l',
            caption: i18n.t('forms.application.sitemap.novyjj1.i-i-s-novyjj1-спр-сотр-l.caption'),
            title: i18n.t('forms.application.sitemap.novyjj1.i-i-s-novyjj1-спр-сотр-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-novyjj1-т-ч-сметы-l',
            caption: i18n.t('forms.application.sitemap.novyjj1.i-i-s-novyjj1-т-ч-сметы-l.caption'),
            title: i18n.t('forms.application.sitemap.novyjj1.i-i-s-novyjj1-т-ч-сметы-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-novyjj1-акт-вып-раб-l',
            caption: i18n.t('forms.application.sitemap.novyjj1.i-i-s-novyjj1-акт-вып-раб-l.caption'),
            title: i18n.t('forms.application.sitemap.novyjj1.i-i-s-novyjj1-акт-вып-раб-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-novyjj1-от-о-рас-ос-мат-l',
            caption: i18n.t('forms.application.sitemap.novyjj1.i-i-s-novyjj1-от-о-рас-ос-мат-l.caption'),
            title: i18n.t('forms.application.sitemap.novyjj1.i-i-s-novyjj1-от-о-рас-ос-мат-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-novyjj1-ед-измер-l',
            caption: i18n.t('forms.application.sitemap.novyjj1.i-i-s-novyjj1-ед-измер-l.caption'),
            title: i18n.t('forms.application.sitemap.novyjj1.i-i-s-novyjj1-ед-измер-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-novyjj1-т-ч-акт-l',
            caption: i18n.t('forms.application.sitemap.novyjj1.i-i-s-novyjj1-т-ч-акт-l.caption'),
            title: i18n.t('forms.application.sitemap.novyjj1.i-i-s-novyjj1-т-ч-акт-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-novyjj1-док-смета-l',
            caption: i18n.t('forms.application.sitemap.novyjj1.i-i-s-novyjj1-док-смета-l.caption'),
            title: i18n.t('forms.application.sitemap.novyjj1.i-i-s-novyjj1-док-смета-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-novyjj1-док-услов-дог-l',
            caption: i18n.t('forms.application.sitemap.novyjj1.i-i-s-novyjj1-док-услов-дог-l.caption'),
            title: i18n.t('forms.application.sitemap.novyjj1.i-i-s-novyjj1-док-услов-дог-l.title'),
            icon: 'calendar',
            children: null
          }]
        }
      ]
    };
  }),
})