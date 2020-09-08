const {
    testRequest
} = require('../helpers');
// TODO tests
describe('Testing an express database server.', () => {
    describe('Request database server status.', () => {
        test('Should pass if server is exist.', async () => {
            const res = await testRequest('http://127.0.0.1:3030/status')
            expect(res.status).toBe(200);
            expect(res.data).toEqual({
                info: 'Server is working'
            });
        });

    });


});