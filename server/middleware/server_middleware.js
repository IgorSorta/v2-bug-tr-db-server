const knex = require('../../database/knex');

const checkStatus = (req, res, next) => {
    res.send({
            info: 'Server is working'
        })
        .end();
};


const catchServerErrors = (err, req, res) => {
    res.json({
        message: err
    });
}

// Checking if table exist in db.
const dbStatusCheck = (table) => {
    return async (req, res, next) => {
        const result = await knex.schema.hasTable(table);

        if (!result) next(new Error('Database is broken!'));
        console.log(result)
        next();
    }
};


module.exports = {
    checkStatus,
    catchServerErrors,
    dbStatusCheck,
};