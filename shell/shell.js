window.tap = (...xs) => { console.log(...xs); return xs[0]; };

const { App } = require('janus');
const app = new App();

const jquery = window.$ = require('jquery');
require('janus-stdlib').view(jquery).registerWith(app.views);
require('janus-inspect').view(jquery).registerWith(app.views);
require('../imagine/imagine').registerViews(app.views);

//const { Instance } = require('../imagine/imagine');
//const instance = new Instance();
const { Form } = require('../imagine/imagine');
const instance = Form.deserialize({
  name: 'Test form',
  questions: [{
    uuid: '81c66b0f-e31b-4408-b22d-3718fcb0235a',
    id: 'name',
    type: 'text',
    prompt: [{ en: 'What is your name?' }]
  }, {
    uuid: '98634669-b9ab-413a-b878-c5c6b08edf64',
    id: 'age',
    type: 'integer',
    prompt: [{ en: 'How old are you?' }]
  }, {
    uuid: '7641269f-fb3e-464a-9cb6-1cb6ce20882e',
    id: 'children',
    type: 'repeat',
    label: [{ en: 'Children' }]
  }, {
    uuid: '665980a3-4ae0-41ae-8e4d-38913f8eb5eb',
    parent: '7641269f-fb3e-464a-9cb6-1cb6ce20882e',
    id: 'child_name',
    type: 'text',
    label: [{ en: 'Child\'s Name' }]
  }, {
    uuid: 'b0acae85-0de6-42f5-8db5-30f71d8c90eb',
    parent: '7641269f-fb3e-464a-9cb6-1cb6ce20882e',
    id: 'child_age',
    type: 'integer',
    label: [{ en: 'Child\'s Age' }]
  }, {
    uuid: 'a081cf72-2c7a-47b1-8656-2462634300db',
    id: 'occupation',
    type: 'text',
    label: [{ en: 'Occupation' }]
  }]
});
const instanceView = app.view(instance);
$('main').append(instanceView.artifact());
instanceView.wireEvents();

