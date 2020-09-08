// Connect to server on localhost
const knex = require('./knex');
const {
    handleDbErrors,
} = require('./db_handlers');

// Find all data in current table
function findAll(table, res, next) {
    knex.table(table)
        .select()
        .then(result => {
            res.json({
                data: result
            })
        })
        .catch(error => {
            handleDbErrors(error);

            next(error);
        });
}

// Find data by its parameter
function findExact(table, data, res, next) {
    knex.table(table)
        .select(data.select)
        .where(data.where)
        .then(result => {

            if (result.length == 0 || result == null) {
                res.json({
                    message: `Data where ${JSON.stringify(data.where)} not found.`
                });
                throw new Error('Data not found')
            }
            res.json({
                data: result
            })
        })
        .catch(error => {
            handleDbErrors(error);

            next(error);
        });
}

// Save data to db.
function saveToDb(table, data, res, next) {
    knex.into(table)
        .insert(data)
        .then((result) => {
            res.json({
                success: true,
                data: result
            });
        })
        .catch(error => {
            handleDbErrors(error);

            next(error);
        });
}

// Update data in db. where parameter is
function updateData(table, data, res, next) {
    knex.into(table)
        .where(data.param)
        .update(data.data)
        .then((result) => {
            res.json({
                success: true,
                data: result
            });
        })
        .catch(error => {
            handleDbErrors(error);

            next(error);
        });
}

// Delete data where parameter is
function deleteExact(table, data, res, next) {
    knex.into(table)
        .where(data)
        .del()
        .then((result) => {
            res.json({
                success: true,
                data: result
            });
        })
        .catch(error => {
            handleDbErrors(error);
            next(error)
        });
}

module.exports = {
    findAll,
    findExact,
    saveToDb,
    updateData,
    deleteExact
};