import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-novyjj1-должности', 'Unit | Serializer | i-i-s-novyjj1-должности', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-novyjj1-должности',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
