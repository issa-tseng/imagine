// primary export.

module.exports = {
  // models
  ...require('./model/question'),
  ...require('./model/form'),

  // views

  registerViews: (library) => {
    require('./view/question').registerWith(library);
    require('./view/form').registerWith(library);
  }
};

