import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ОтОРасОсМатMixin
} from '../mixins/regenerated/models/i-i-s-novyjj1-от-о-рас-ос-мат';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ОтОРасОсМатMixin, Validations, {
});

defineProjections(Model);

export default Model;
