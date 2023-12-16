import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТЧАктMixin
} from '../mixins/regenerated/models/i-i-s-novyjj1-т-ч-акт';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТЧАктMixin, Validations, {
});

defineProjections(Model);

export default Model;
