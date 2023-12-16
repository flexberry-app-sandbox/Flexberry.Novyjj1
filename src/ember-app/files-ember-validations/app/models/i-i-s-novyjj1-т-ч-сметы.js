import {
  defineNamespace,
  defineProjections,
  Model as ТЧСметыMixin
} from '../mixins/regenerated/models/i-i-s-novyjj1-т-ч-сметы';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТЧСметыMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
