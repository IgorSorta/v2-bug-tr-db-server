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

// TODO deleteUser from db
// TODO deleteBug from db
// TODO deleteMessage from db


module.exports = {

    findUser(table, target) {
        return new Promise(resolve => {
            knex.from(table)
                .select('email')
                .where({
                    name: `${target}`,
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
};