const { Model, attribute, List } = require('janus');
const { Questions } = require('./question');

const Form = Model.build(
  attribute('questions', attribute.List.of(Questions))
)

module.exports = { Form };

