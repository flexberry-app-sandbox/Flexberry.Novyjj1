import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as БюдСтроиMixin
} from '../mixins/regenerated/models/i-i-s-novyjj1-бюд-строи';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(БюдСтроиMixin, Validations, {
});

defineProjections(Model);

export default Model;
