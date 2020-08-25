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


module.exports = {
    findAll(table) {
        return new Promise(resolve => {
            knex.from(table)
                .select()
                .then((result) => {
                    resolve(result[0]);
                })
                .catch((err) => {
                    console.log(err);
                    throw err
                });
        });
    },
    findBy(table, param, select) {
        return new Promise(resolve => {
            knex.from(table)
                .select(select)
                .where({
                    name: `${param}`,
                })
                .then((result) => {
                    resolve(result[0].email);
                })
                .catch((err) => {
                    console.log(err);
                    throw err
                });
        });

    },
    saveToDb(table, data) {
        return new Promise(resolve => {
            knex.into(table)
                .insert(data)
                .then((result) => {
                    resolve(result);
                })
                .catch((err) => {
                    console.log(err);
                    throw err;
                });
        });
    },
    updateData(table, data, param) {
        return new Promise(resolve => {
            knex.into(table)
                .update(data)
                .where(param)
                .then((result) => {
                    resolve(result);
                })
                .catch((err) => {
                    console.log(err);
                    throw err;
                });
        });
    },
    deleteExact(table, param) {
        return new Promise(resolve => {
            knex.into(table)
                .del()
                .where(param)
                .then((result) => {
                    resolve(result);
                })
                .catch((err) => {
                    console.log(err);
                    throw err;
                });
        });
    }
};