exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('messages')
        .del()
        .then(function() {
            // Inserts seed entries
            return knex('messages').insert([{
                    msg_id: 1,
                    text: 'Message from Jojo',
                    user_id: 1
                },
                {
                    msg_id: 2,
                    text: 'Message from Elon',
                    user_id: 2
                },
                {
                    msg_id: 3,
                    text: 'Message from Max',
                    user_id: 3
                },
            ]);
        });
};