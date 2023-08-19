const { DomView, template, find, from } = require('janus');
const $ = require('jquery');

const QuestionMainView = DomView.build($(`
  <div class="imx-q">
    <div class="imx-qLogic"></div>
    <div class="imx-qMain"></div>
    <div class="imx-qTexts"></div>
    <div class="imx-qMore"></div>
  </div>
`), template(
  //
));

const { Question } = require('../model/question');
module.exports = { QuestionMainView, registerWith(library) {
  for (const QT of Object.values(Question.types))
    library.register(QT, QuestionMainView);
} };

