// TODO Add option for User, Message, Bug 
// Impor routes option
const name = {
    schema: {
        response: {
            200: {
                type: 'string',
                properties: {
                    res: {
                        type: 'string'
                    }
                }
            }
        }
    }
};

module.exports = {
    name,
};