/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.up = function(knex) {
    return(
        knex.schema.createTable("users", (table) => {
            table.increments("id");
            table.string("username", 255).notNullable();
            table.timestamps(true, true);
        })
        .then(() => console.log("Created users table"))
        .then(() => {
            knex("users").insert([
                { username: "Mark" },
                { username: "Narcy" },
                { username: "Guest" },
            ])
        })
    )
};

/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists("users").then(() => console.log("Dropped users table"));
};
