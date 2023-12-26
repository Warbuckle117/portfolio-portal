/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return(
      knex("users").insert([
          { username: "Mark" },
          { username: "Narcy" },
          { username: "Guest" },
      ])
          .then(() => console.log("Created users"))
  )
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex("users").del()
      .then(() => console.log("Deleted users"));
};
