const user = require('./userRout');
const authenticationService = require('./authentication_serviceRout')
const { authentication } = require('../auth/middelware')
const ENV = require('../config/ENV');


const routers = (app) => {
    app.use(authenticationService);
    app.use(ENV.API_V, authentication, user);
}

module.exports = routers;