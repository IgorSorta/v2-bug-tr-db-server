// TODO db
const {
    requestDbApi
} = require('../helpers');

describe('Testing a database.', () => {


    describe('Request all users from table.', () => {
        let requestUsers = requestDbApi('http://127.0.0.1:3030/user/all');

        test('Should pass if request is correct.', async () => {
            const result = await requestUsers();

            expect(result).not.toBeNull();
            expect(result.status).toBe(200);
            expect(result.headers['content-type']).toBe('application/json; charset=utf-8')
            expect(result.data.data).toHaveLength(3);
        });
    });

    describe('Request user from table by ...', () => {
        let requestUser = requestDbApi('http://127.0.0.1:3030/user/params');

        test(`Should pass if request {SELECT x FROM table WHERE param = value} is correct.`, async () => {
            const data = {
                select: 'email',
                where: {
                    name: 'Jojo'
                }
            };

            const result = await requestUser(data, 'POST');

            expect(result).not.toBeNull();
            expect(result.status).toBe(200);
            expect(result.headers['content-type']).toBe('application/json; charset=utf-8')
            expect(result.data.data).toHaveLength(1);
        });

        test('Should pass if request {SELECT [x1,x2,...] FROM table WHERE param1=value1 AND param2=value2 AND ...} is correct.', async () => {
            const data = {
                select: ["email", "name", "role"],
                where: {
                    name: 'Jojo',
                    password: "jojo"
                }
            };

            const result = await requestUser(data, 'POST');

            expect(result).not.toBeNull();
            expect(result.status).toBe(200);
            expect(result.headers['content-type']).toBe('application/json; charset=utf-8')
            expect(result.data.data).toHaveLength(1);
        });
    });

    describe('Create a new user.', () => {
        let newUser = requestDbApi('http://127.0.0.1:3030/user/new');

        test('Should pass if user created successfully.', async () => {
            const data = {
                name: 'new user',
                email: 'new@mail.com',
                password: 'newnew',
                role: 'USER'
            };
            const result = await newUser(data, 'POST');

            expect(result).not.toBeNull();
            expect(result.status).toBe(200);
            expect(result.headers['content-type']).toBe('application/json; charset=utf-8')
            expect(result.data.data).toHaveLength(1);
        });
    });

    describe('Update current user data.', () => {
        let updateUser = requestDbApi('http://127.0.0.1:3030/user/update');

        test('Should pass if update request is correct.', async () => {
            const data = {
                param: {
                    name: 'new user'
                },
                data: {
                    email: 'updated@mail.com'
                }
            };

            const result = await updateUser(data, 'POST');

            expect(result).not.toBeNull();
            expect(result.status).toBe(200);
            expect(result.headers['content-type']).toBe('application/json; charset=utf-8')
            expect(result.data).toEqual({
                "data": 1,
                "success": true
            });
        });
    });

    describe('Delete a user.', () => {
        let deleteUser = requestDbApi('http://127.0.0.1:3030/user/delete');

        test('Should pass if delete operation is successful.', async () => {
            const data = {
                name: 'new user'
            };

            const result = await deleteUser(data, 'POST');

            expect(result).not.toBeNull();
            expect(result.status).toBe(200);
            expect(result.headers['content-type']).toBe('application/json; charset=utf-8')
            expect(result.data).toEqual({
                "data": 1,
                "success": true
            });
        });
    });
});