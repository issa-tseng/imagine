const { DomView, template, find, from } = require('janus');
const $ = require('jquery');

const FormView = DomView.build($(`
  <div class="imx-f">
    <div class="imx-fHeader">
      <div class="imx-fName"></div>
    </div>
    <div class="imx-fTabs"></div>
    <div class="imx-qArea"></div>
    <div class="imx-fScroll"></div>
  </div>
`), template(
  find('.imx-qArea').render(from('questions'))
));

const { Form } = require('../model/form');
module.exports = { FormView, registerWith(library) {
  library.register(Form, FormView);
} };

