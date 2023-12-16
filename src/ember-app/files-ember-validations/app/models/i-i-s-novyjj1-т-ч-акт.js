import {
  defineNamespace,
  defineProjections,
  Model as ТЧАктMixin
} from '../mixins/regenerated/models/i-i-s-novyjj1-т-ч-акт';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТЧАктMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
