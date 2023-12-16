import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПланировСМРMixin
} from '../mixins/regenerated/models/i-i-s-novyjj1-планиров-с-м-р';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПланировСМРMixin, Validations, {
});

defineProjections(Model);

export default Model;
