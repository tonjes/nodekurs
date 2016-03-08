var _ = require('lodash');
var heroin = require('heroin-js');

var prod = {
    name: 'tonjes-book-inventory-service',
    domains: ['tonjes-book-inventory-service.herokuapp.com'],
    log_drains: ['syslog://data.logentries.com:13636'],
    addons: {
        librato: {plan: 'librato:development'}
    }
};

var config = _.merge({}, require('./base'), prod);

var configurator = heroin(process.env.HEROKU_API_TOKEN, {debug: false});
configurator(config);