const {
    testRequest,
    testDbQuery
} = require('../helpers');
// TODO tests
describe('Loading express', () => {
    test('Is express', async () => {
        const res = await testRequest('http://127.0.0.1:3030/');
        expect(res.status).toBe(200);
        expect(res.data).toEqual('Home page.');
    });

    test('Truthy', () => {
        const tr = true;
        expect(tr).toBe(true);
    });

    test('DB', async () => {
        const query = `SELECT * FROM users`;
        const res = await testDbQuery(query)

        console.log(res);
        expect(res).not.toBeNull();
    });
});