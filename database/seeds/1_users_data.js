exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('users')
        .del()
        .then(function() {
            // Inserts seed entries
            return knex('users').insert([{
                    user_id: 1,
                    name: 'Jojo',
                    email: 'jojo@mail.com',
                    password: 'jojo',
                    role: 'ADMIN'
                },
                {
                    user_id: 2,
                    name: 'Elon',
                    email: 'elon@mail.com',
                    password: 'elon',
                    role: 'USER'
                },
                {
                    user_id: 3,
                    name: 'Max',
                    email: 'max@mail.com',
                    password: 'max',
                    role: 'USER'
                },
            ]);
        });
};