exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('bugs')
        .del()
        .then(function() {
            // Inserts seed entries
            return knex('bugs').insert([{
                    bug_id: 1,
                    title: 'Bug N.1',
                    description: 'Bug from Jojo',
                    status: 'NEW',
                    priority: 'UNKNOWN',
                    user_id: 1
                },
                {
                    bug_id: 2,
                    title: 'Bug N.2',
                    description: 'Bug from Elon',
                    status: 'NEW',
                    priority: 'UNKNOWN',
                    user_id: 2
                },
                {
                    bug_id: 3,
                    title: 'Bug N.3',
                    description: 'Bug from Max',
                    status: 'NEW',
                    priority: 'UNKNOWN',
                    user_id: 3
                },

            ]);
        });
};