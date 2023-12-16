import {
  defineNamespace,
  defineProjections,
  Model as ПланировСМРMixin
} from '../mixins/regenerated/models/i-i-s-novyjj1-планиров-с-м-р';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПланировСМРMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
