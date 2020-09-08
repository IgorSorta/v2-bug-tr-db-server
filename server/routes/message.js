//TODO messages
const router = require('express').Router();

const {
    findAll,
    findExact,
    saveToDb,
    updateData,
    deleteExact
} = require('../../database/db_crud');

// get all messages
router.get('/all', (req, res, next) => {
    findAll('messages', res, next);
});

// request message by ...
router.post('/params', (req, res, next) => {
    const data = req.body;

    findExact('messages', data, res, next);
});

// create new message
router.post('/new', (req, res, next) => {
    const data = req.body;
    saveToDb('messages', data, res, next);

});

// update message data
router.post('/update', (req, res, next) => {
    const data = req.body;

    updateData('messages', data, res, next);
});

// delete message
router.post('/delete', (req, res, next) => {
    const data = req.body;

    deleteExact('messages', data, res, next);
});


module.exports = router;