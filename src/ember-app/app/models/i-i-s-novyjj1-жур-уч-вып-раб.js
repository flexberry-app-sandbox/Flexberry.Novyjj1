import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ЖурУчВыпРабMixin
} from '../mixins/regenerated/models/i-i-s-novyjj1-жур-уч-вып-раб';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ЖурУчВыпРабMixin, Validations, {
});

defineProjections(Model);

export default Model;
