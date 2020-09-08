const router = require('express').Router();

const {
    findAll,
    findExact,
    saveToDb,
    updateData,
    deleteExact
} = require('../../database/db_crud');

// get all bugs
router.get('/all', (req, res, next) => {
    findAll('bugs', res, next);
});

// request bug by ...
router.post('/params', (req, res, next) => {
    const data = req.body;

    findExact('bugs', data, res, next);
});

// create new bug
router.post('/new', (req, res, next) => {
    const data = req.body;
    saveToDb('bugs', data, res, next);

});

// update bug data
router.post('/update', (req, res, next) => {
    const data = req.body;

    updateData('bugs', data, res, next);
});

// delete bug
router.post('/delete', (req, res, next) => {
    const data = req.body;

    deleteExact('bugs', data, res, next);
});


module.exports = router;