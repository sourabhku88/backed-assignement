const { authorazation } = require('../auth/middelware');
const users = require('../controllers/userController');
const router = require('express').Router();

router.post('/user', users.createUser);
router.get('/profile/:userId', authorazation, users.user);
router.get('/user/:userId', users.getUserDetails);
router.get('/users', users.getAllUsers);
router.put('/user/:userId', authorazation, users.UpdateUserDetails);


module.exports = router;