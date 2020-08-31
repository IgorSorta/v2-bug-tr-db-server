// TODO db
const {
    requestDbApi
} = require('../helpers');

describe('Testing a database.', () => {


    describe('Request users from table.', () => {
        let requestUsers = requestDbApi('http://127.0.0.1:3030/user/all');

        test('Should pass if request is correct.', async () => {
            const result = await requestUsers();

            //console.log(result.data);
            expect(result).not.toBeNull();
        });
    });

    describe('Request user from table by id.', () => {
        let requestUser = requestDbApi('http://127.0.0.1:3030/user/params');

        test('Should pass if request is correct.', async () => {
            const params = {
                user_id: 1
            };

            const result = await requestUser(params, 'POST');

            //console.log(result.data);
            expect(result).not.toBeNull();
        });
    });

    describe('Create a new user.', () => {
        let newUser = requestDbApi('http://127.0.0.1:3030/user/new');

        test('Should pass if user created successfully.', async () => {

        });
    });

    describe('Update current user data.', () => {
        let updateUser = requestDbApi('http://127.0.0.1:3030/user/update');

        test('Should pass if update request is correct.', async () => {

        });
    });

    describe('Delete a user.', () => {
        let newUser = requestDbApi('http://127.0.0.1:3030/user/delete');

        test('Should pass if delete operation is successful.', async () => {

        });
    });
});