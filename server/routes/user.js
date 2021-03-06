const router = require('express').Router();
// DB methods
const {
    findAll,
    findExact,
    saveToDb,
    updateData,
    deleteExact
} = require('../../database/db_crud');

const {
    dbStatusCheck
} = require('../middleware/server_middleware');

const dbStatus = dbStatusCheck('users');
router.use(dbStatus);

// get all users
router.get('/all', (req, res, next) => {
    findAll('users', res, next);
});

// request user by ...
router.post('/params', (req, res, next) => {
    const data = req.body;

    findExact('users', data, res, next);
});

// create new user
router.post('/new', (req, res, next) => {
    const data = req.body;
    saveToDb('users', data, res, next);

});

// update user data
router.post('/update', (req, res, next) => {
    const data = req.body;

    updateData('users', data, res, next);
});

// delete user
router.post('/delete', (req, res, next) => {
    const data = req.body;

    deleteExact('users', data, res, next);
});

module.exports = router;