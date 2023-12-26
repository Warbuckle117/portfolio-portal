/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return(
        knex("tools").insert([
            { name:"Notes", description: "Note Taking Service", url: "/tools/notes" },
            { name: "Meal Planner", description: "Meal Planning Service", url: "/tools/meal-planner" },
            { name: "Gym Tracker", description: "Tracks workouts for gym and fitness goals", url: "/tools/gym-tracker" },
        ])
    )
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
