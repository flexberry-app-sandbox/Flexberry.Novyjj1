import {
  defineNamespace,
  defineProjections,
  Model as ДокУсловДогMixin
} from '../mixins/regenerated/models/i-i-s-novyjj1-док-услов-дог';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ДокУсловДогMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
