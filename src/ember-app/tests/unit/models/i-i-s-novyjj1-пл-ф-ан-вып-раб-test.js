import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-novyjj1-пл-ф-ан-вып-раб', 'Unit | Model | i-i-s-novyjj1-пл-ф-ан-вып-раб', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-novyjj1-акт-вып-раб',
    'model:i-i-s-novyjj1-бюд-строи',
    'model:i-i-s-novyjj1-док-смета',
    'model:i-i-s-novyjj1-док-услов-дог',
    'model:i-i-s-novyjj1-должности',
    'model:i-i-s-novyjj1-ед-измер',
    'model:i-i-s-novyjj1-жур-уч-вып-раб',
    'model:i-i-s-novyjj1-номенклатура',
    'model:i-i-s-novyjj1-от-о-рас-ос-мат',
    'model:i-i-s-novyjj1-пл-ф-ан-вып-раб',
    'model:i-i-s-novyjj1-планиров-с-м-р',
    'model:i-i-s-novyjj1-спр-контраг',
    'model:i-i-s-novyjj1-спр-сотр',
    'model:i-i-s-novyjj1-т-ч-акт',
    'model:i-i-s-novyjj1-т-ч-сметы',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
