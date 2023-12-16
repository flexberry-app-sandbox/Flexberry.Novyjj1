import {
  defineNamespace,
  defineProjections,
  Model as ПлФАнВыпРабMixin
} from '../mixins/regenerated/models/i-i-s-novyjj1-пл-ф-ан-вып-раб';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПлФАнВыпРабMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
