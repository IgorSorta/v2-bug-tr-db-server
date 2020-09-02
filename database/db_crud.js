// Connect to server on localhost
const knex = require('./knex');

// TODO findUsers in db
// TODO findUser in db by id
// TODO findMessages in db
// TODO findMessage in db by id
// TODO findBugs in db
// TODO findBug in db by id

// TODO saveUser to db
// TODO saveMessage to db
// TODO saveBug to db

// TODO update method

// TODO deleteUser from db
// TODO deleteBug from db
// TODO deleteMessage from db


function findAll(table, res) {
    knex.table(table)
        .select()
        .then(result => {
            res.json({
                data: result
            })
        })
        .catch(error => console.log(error));
}


function findExact(table, data, res) {
    knex.table(table)
        .select(data.select)
        .where(data.where)
        .then(result => {
            res.json({
                data: result
            })
        })
        .catch(error => console.log(error));
}

function saveToDb(table, data, res) {
    knex.into(table)
        .insert(data)
        .then((result) => {
            res.json({
                success: true,
                data: result
            });
        })
        .catch((err) => {
            console.log(err);
            throw err;
        });
}

function updateData(table, data, res) {
    knex.into(table)
        .where(data.param)
        .update(data.data)
        .then((result) => {
            res.json({
                success: true,
                data: result
            });
        })
        .catch((err) => {
            console.log(err);
            throw err;
        });
}

function deleteExact(table, data, res) {
    knex.into(table)
        .where(data)
        .del()
        .then((result) => {
            res.json({
                success: true,
                data: result
            });
        })
        .catch((err) => {
            console.log(err);
            throw err;
        });
}

module.exports = {
    findAll,
    findExact,
    saveToDb,
    updateData,
    deleteExact
};