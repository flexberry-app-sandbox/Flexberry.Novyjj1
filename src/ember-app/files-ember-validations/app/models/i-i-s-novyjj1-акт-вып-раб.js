import {
  defineNamespace,
  defineProjections,
  Model as АктВыпРабMixin
} from '../mixins/regenerated/models/i-i-s-novyjj1-акт-вып-раб';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(АктВыпРабMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
