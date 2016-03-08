var heroin = require('heroin-js');

var configurator = heroin(process.env.HEROKU_API_TOKEN, {debug: false});

configurator.export('tonjes-book-inventory-service').then(function(result) {
    console.log(result);
});

var prod = {
    name: 'tonjes-book-inventory-service-test',
    region: 'eu',
    maintenance: false,
    stack: 'cedar-14',
    config_vars: {
        NODE_ENV: 'production'},
        //MONGOLAB_URI: 'mongodb://heroku_54lcwczh:d67cgsnc4qh0nat53novn1m2mn@ds019498.mlab.com:19498/heroku_54lcwczh' },
    addons: {
        mongolab: { plan: 'mongolab:sandbox' } },
    collaborators: [ 'tonje.sundby@schibsted.no', 'yvonne.richa@schibsted.no' ],
    features:
    { 'runtime-dyno-metadata': { enabled: false },
        'log-runtime-metrics': { enabled: false },
        'http-session-affinity': { enabled: false },
        preboot: { enabled: false },
        'http-shard-header': { enabled: false },
        'http-end-to-end-continue': { enabled: false } },
    formation: [ { process: 'web', quantity: 1, size: 'Free' } ],
    log_drains: []
    //domains: [ 'tonjes-book-inventory-service.herokuapp.com' ]
}
configurator(prod);