const authenticationService = require('../controllers/authentication_service');
const router = require('express').Router();



router.post('/login', authenticationService.login);
// router.get('/auth/google', authenticationService.googleLogin);
// router.get('/auth/google/callback', authenticationService.googleCallback);
// router.get('/auth/google/failure', authenticationService.googleLoginFailure);
router.get('/logout', authenticationService.logout);


module.exports = router;