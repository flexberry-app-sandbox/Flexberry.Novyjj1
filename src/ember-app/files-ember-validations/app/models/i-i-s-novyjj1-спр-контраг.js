import {
  defineNamespace,
  defineProjections,
  Model as СпрКонтрагMixin
} from '../mixins/regenerated/models/i-i-s-novyjj1-спр-контраг';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СпрКонтрагMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
