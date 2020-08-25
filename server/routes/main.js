const router = require('express').Router();
//TODO routes
router.get('/home', async (req, res, next) => {
    res.status(200).send('Home page.');
});

router.get('/about', async (req, res, next) => {
    res.status(200).send('About page.');
});

module.exports = router;