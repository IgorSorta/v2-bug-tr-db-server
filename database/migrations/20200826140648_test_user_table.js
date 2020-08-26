exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(table) {
            table.increments('user_id').primary();
            table.string('name').notNullable();
            table.string('email').notNullable();
            table.string('password').notNullable();
            table.string('role').notNullable();
            table.timestamp('created_at').defaultTo(knex.fn.now())
            table.timestamp('updated_at').defaultTo(knex.fn.now())
        })
        .createTable('messages', function(table) {
            table.increments('msg_id').primary();
            table.string('text').notNullable();
            table.integer('user_id').unsigned().references('user_id').inTable('users');
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        })
        .createTable('bugs', function(table) {
            table.increments('bug_id').primary();
            table.string('title').notNullable();
            table.string('description').notNullable();
            table.string('status').notNullable();
            table.string('priority').notNullable();
            table.integer('user_id').unsigned().references('user_id').inTable('users');
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users').dropTable('messages').dropTable('bugs');
}