import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-novyjj1-акт-вып-раб-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-novyjj1-т-ч-акт+едИзмер':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: '',
            required: true,
            relationName: 'едИзмер',
            projection: 'ЕдИзмерL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
