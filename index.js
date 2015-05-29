/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-rosie',

  included: function(app) {
    this._super.included(app);

    if (app.env !== 'production') {
      app.import(app.bowerDirectory + '/rosie/src/rosie.js');
      app.import('vendor/ember-rosie/shim.js', {
        type: 'vendor',
        exports: { 'Factory': ['default'] }
      });
    }
  }
};
