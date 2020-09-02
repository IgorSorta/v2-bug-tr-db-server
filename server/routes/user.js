const router = require('express').Router();
const {
    findAll,
    findExact,
    saveToDb,
    updateData,
    deleteExact
} = require('../../database/db_crud');


router.get('/all', (req, res) => {
    findAll('users', res);
});

// request user by id
router.post('/params', (req, res) => {
    const data = req.body;

    findExact('users', data, res);
});

// create new user
router.post('/new', (req, res) => {
    const data = req.body;

    saveToDb('users', data, res);
});

// update user data
router.post('/update', (req, res) => {
    const data = req.body;

    updateData('users', data, res);
});

// delete user
router.post('/delete', (req, res) => {
    const data = req.body;

    deleteExact('users', data, res);
});

module.exports = router;