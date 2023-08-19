const { Model, attribute, List } = require('janus');
const { UiText, Uuid } = require('../../util/janus-ext');

class Question extends Model.build(
  attribute('uuid', Uuid),
  attribute('parent', Uuid),
  attribute('id', attribute.Text),
  attribute('type', class extends attribute.Enum {
    _values() { return Object.keys(Question.types); }
  }),
  attribute('label', UiText)
) { };

Question.types = {
  text: Model.build(
    Question
  ),
  integer: Model.build(
    Question
  ),
  repeat: Model.build(
    Question
  ),
};

class Questions extends List.of(Question) {
  static deserialize(data) {
    if (!Array.isArray(data)) throw new Error('corrupt');
    return new List(data.map(obj => {
      if (!Object.hasOwn(Question.types, obj.type)) throw new Error('corrupt');
      return Question.types[obj.type].deserialize(obj);
    }));
  }
}

module.exports = { Question, Questions };

