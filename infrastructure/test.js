var _ = require('lodash');
var heroin = require('heroin-js');

var test = {
    name: 'tonjes-book-inventory-service-test',
    domains: ['tonjes-book-inventory-service.herokuapp.com']
};

var config = _.merge({}, require('./base'), test);

var configurator = heroin(process.env.HEROKU_API_TOKEN, {debug: false});
configurator(config);