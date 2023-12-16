import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТЧСметыMixin
} from '../mixins/regenerated/models/i-i-s-novyjj1-т-ч-сметы';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТЧСметыMixin, Validations, {
});

defineProjections(Model);

export default Model;
