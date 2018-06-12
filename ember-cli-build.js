'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function emberCliBuild(defaults) {
  const app = new EmberApp(defaults, {
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  app.import('node_modules/graphql-request/dist/src/index.js', {
    using: [
      { transformation: 'cjs', as: 'graphql-request' },
    ],
  });

  app.import('node_modules/linkifyjs/dist/linkify.js');
  app.import('node_modules/linkifyjs/dist/linkify-jquery.js');
  app.import('node_modules/linkifyjs/dist/linkify-plugin-mention.js');

  app.import('node_modules/moment/moment.js', {
    using: [
      { transformation: 'amd', as: 'moment' },
    ],
  });

  app.import('node_modules/showdown/dist/showdown.js');

  app.import('node_modules/bulma/css/bulma.css');

  return app.toTree();
};
