/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  knex.schema.createTable("tools", (table) => {
        table.increments("id");
        table.string("name", 255).notNullable();
        table.string("description", 255).notNullable();
        table.string("url", 255).notNullable();
        table.timestamps(true, true);
    })
  .then(() => console.log("Created tools table"))
  .then(() => {
        knex("tools").insert([
            { name:"Notes", description: "Note Taking Service", url: "/tools/notes" },
            { name: "Meal Planner", description: "Meal Planning Service", url: "/tools/meal-planner" },
            { name: "Gym Tracker", description: "Tracks workouts for gym and fitness goals", url: "/tools/gym-tracker" },
        ])
    })
  .then(() => console.log("Added tools"))
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("tools").then(() => console.log("Dropped tools table"));
};
