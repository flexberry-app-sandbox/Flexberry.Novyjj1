import {
  defineNamespace,
  defineProjections,
  Model as ЖурУчВыпРабMixin
} from '../mixins/regenerated/models/i-i-s-novyjj1-жур-уч-вып-раб';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЖурУчВыпРабMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
