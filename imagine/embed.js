// this file serves as a library entrypoint for those wishing to embed imagine.
// its primary homework is to terminate anything to do with janus.
//
// the default app does not reference this file; it directly consumes internal
// as we do here to get directly at the janus components.

const { App } = require('janus');
const app = new App();

const jquery = require('jquery');
require('../imagine/imagine').registerViews(app.views);
require('janus-stdlib').view(jquery).registerWith(app.views);

const { Instance } = require('../imagine/imagine');
const editor = (node) => {
  const instance = new Instance();
  const instanceView = app.view(instance);
  jquery(node).append(instanceView.artifact());
  instanceView.wireEvents();
};

module.exports = { editor };

