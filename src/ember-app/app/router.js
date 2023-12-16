import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-novyjj1-акт-вып-раб-l');
  this.route('i-i-s-novyjj1-акт-вып-раб-e',
  { path: 'i-i-s-novyjj1-акт-вып-раб-e/:id' });
  this.route('i-i-s-novyjj1-акт-вып-раб-e.new',
  { path: 'i-i-s-novyjj1-акт-вып-раб-e/new' });
  this.route('i-i-s-novyjj1-бюд-строи-l');
  this.route('i-i-s-novyjj1-бюд-строи-e',
  { path: 'i-i-s-novyjj1-бюд-строи-e/:id' });
  this.route('i-i-s-novyjj1-бюд-строи-e.new',
  { path: 'i-i-s-novyjj1-бюд-строи-e/new' });
  this.route('i-i-s-novyjj1-док-смета-l');
  this.route('i-i-s-novyjj1-док-смета-e',
  { path: 'i-i-s-novyjj1-док-смета-e/:id' });
  this.route('i-i-s-novyjj1-док-смета-e.new',
  { path: 'i-i-s-novyjj1-док-смета-e/new' });
  this.route('i-i-s-novyjj1-док-услов-дог-l');
  this.route('i-i-s-novyjj1-док-услов-дог-e',
  { path: 'i-i-s-novyjj1-док-услов-дог-e/:id' });
  this.route('i-i-s-novyjj1-док-услов-дог-e.new',
  { path: 'i-i-s-novyjj1-док-услов-дог-e/new' });
  this.route('i-i-s-novyjj1-должности-l');
  this.route('i-i-s-novyjj1-должности-e',
  { path: 'i-i-s-novyjj1-должности-e/:id' });
  this.route('i-i-s-novyjj1-должности-e.new',
  { path: 'i-i-s-novyjj1-должности-e/new' });
  this.route('i-i-s-novyjj1-ед-измер-l');
  this.route('i-i-s-novyjj1-ед-измер-e',
  { path: 'i-i-s-novyjj1-ед-измер-e/:id' });
  this.route('i-i-s-novyjj1-ед-измер-e.new',
  { path: 'i-i-s-novyjj1-ед-измер-e/new' });
  this.route('i-i-s-novyjj1-жур-уч-вып-раб-l');
  this.route('i-i-s-novyjj1-жур-уч-вып-раб-e',
  { path: 'i-i-s-novyjj1-жур-уч-вып-раб-e/:id' });
  this.route('i-i-s-novyjj1-жур-уч-вып-раб-e.new',
  { path: 'i-i-s-novyjj1-жур-уч-вып-раб-e/new' });
  this.route('i-i-s-novyjj1-номенклатура-l');
  this.route('i-i-s-novyjj1-номенклатура-e',
  { path: 'i-i-s-novyjj1-номенклатура-e/:id' });
  this.route('i-i-s-novyjj1-номенклатура-e.new',
  { path: 'i-i-s-novyjj1-номенклатура-e/new' });
  this.route('i-i-s-novyjj1-от-о-рас-ос-мат-l');
  this.route('i-i-s-novyjj1-от-о-рас-ос-мат-e',
  { path: 'i-i-s-novyjj1-от-о-рас-ос-мат-e/:id' });
  this.route('i-i-s-novyjj1-от-о-рас-ос-мат-e.new',
  { path: 'i-i-s-novyjj1-от-о-рас-ос-мат-e/new' });
  this.route('i-i-s-novyjj1-пл-ф-ан-вып-раб-l');
  this.route('i-i-s-novyjj1-пл-ф-ан-вып-раб-e',
  { path: 'i-i-s-novyjj1-пл-ф-ан-вып-раб-e/:id' });
  this.route('i-i-s-novyjj1-пл-ф-ан-вып-раб-e.new',
  { path: 'i-i-s-novyjj1-пл-ф-ан-вып-раб-e/new' });
  this.route('i-i-s-novyjj1-планиров-с-м-р-l');
  this.route('i-i-s-novyjj1-планиров-с-м-р-e',
  { path: 'i-i-s-novyjj1-планиров-с-м-р-e/:id' });
  this.route('i-i-s-novyjj1-планиров-с-м-р-e.new',
  { path: 'i-i-s-novyjj1-планиров-с-м-р-e/new' });
  this.route('i-i-s-novyjj1-спр-контраг-l');
  this.route('i-i-s-novyjj1-спр-контраг-e',
  { path: 'i-i-s-novyjj1-спр-контраг-e/:id' });
  this.route('i-i-s-novyjj1-спр-контраг-e.new',
  { path: 'i-i-s-novyjj1-спр-контраг-e/new' });
  this.route('i-i-s-novyjj1-спр-сотр-l');
  this.route('i-i-s-novyjj1-спр-сотр-e',
  { path: 'i-i-s-novyjj1-спр-сотр-e/:id' });
  this.route('i-i-s-novyjj1-спр-сотр-e.new',
  { path: 'i-i-s-novyjj1-спр-сотр-e/new' });
  this.route('i-i-s-novyjj1-т-ч-акт-l');
  this.route('i-i-s-novyjj1-т-ч-акт-e',
  { path: 'i-i-s-novyjj1-т-ч-акт-e/:id' });
  this.route('i-i-s-novyjj1-т-ч-акт-e.new',
  { path: 'i-i-s-novyjj1-т-ч-акт-e/new' });
  this.route('i-i-s-novyjj1-т-ч-сметы-l');
  this.route('i-i-s-novyjj1-т-ч-сметы-e',
  { path: 'i-i-s-novyjj1-т-ч-сметы-e/:id' });
  this.route('i-i-s-novyjj1-т-ч-сметы-e.new',
  { path: 'i-i-s-novyjj1-т-ч-сметы-e/new' });
});

export default Router;
