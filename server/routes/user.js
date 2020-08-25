const router = require('express').Router();
const db = require('../../database/db_crud');

//TODO routes
// request all users
router.get('/all', async (req, res, next) => {
    const result = await db.findAll('users');

    res.status(200).send(result);
});

// request user by id
router.get('/:id', async (req, res, next) => {
    const user = req.params;
    const result = await db.findBy('users', user.id, 'email');

    res.status(200).send(result);
});

// create new user
router.post('/new', async (req, res, next) => {
    const data = req.body;

    const result = await db.saveToDb('users', data);
    res.status(203).send(result);
});

// update user data
router.patch('/:id', async (req, res, next) => {
    const user = req.params;
    const data = req.body;

    const result = await db.updateData('users', data, user.id);
    res.status(200).send(result);
});

// delete user
router.delete('/:id', async (req, res, next) => {
    const user = req.params;

    const result = await db.deleteExact('users', user.id);
    res.status(200).send(result);
});

module.exports = router;