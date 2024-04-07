const express = require('express');
const { customRateLimit } = require('./config/ratelimit');
const { DBconnection } = require('./config/DB');
const response = require('./util/response');
const ENV = require('./config/ENV');
const routers = require("./routes");
const multer = require('multer');
const session = require('express-session');
const passport = require('passport');
require('./config/passport');

const app = express();




app.use(express.json());
app.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(multer().any())
customRateLimit(app);
DBconnection();



// google login
app.get('/auth/google', passport.authenticate('google', { scope: ['email', 'profile'] }));
app.get('/auth/google/callback', passport.authenticate('google', { successRedirect: '/api/v1/', failureRedirect: '/auth/google/failure' }));

// Welcome URL and Not Found Error API
app.use('/api/v1/', (_, res) => response.succes(res, 'Welcome to Server!'));

// APIs
routers(app);

app.use('*', (_, res) => response.notFound(res, 'API NOT FOUND!'));

// listing port:
app.listen(process.env.PORT, () => console.log(`Server running on ${ENV.PORT}`));