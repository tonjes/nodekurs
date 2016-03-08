var _ = require('lodash');
var heroin = require('heroin-js');

var test = {
    name: 'tonjes-book-inventory-test'
};

var config = _.merge({}, require('./base'), test);

var configurator = heroin(process.env.HEROKU_API_TOKEN, {debug: false});
configurator(config);