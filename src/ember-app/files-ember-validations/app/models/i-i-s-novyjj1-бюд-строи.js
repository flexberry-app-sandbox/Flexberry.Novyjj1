import {
  defineNamespace,
  defineProjections,
  Model as БюдСтроиMixin
} from '../mixins/regenerated/models/i-i-s-novyjj1-бюд-строи';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(БюдСтроиMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
