import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as АктВыпРабMixin
} from '../mixins/regenerated/models/i-i-s-novyjj1-акт-вып-раб';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(АктВыпРабMixin, Validations, {
});

defineProjections(Model);

export default Model;
