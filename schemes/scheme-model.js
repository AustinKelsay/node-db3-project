const db = require("../data/dbConfig");


module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

//resolves to an array of schemes
function find() {
    return db("schemes");
}

//resolves to a single scheme or null if the id is invalid
function findById(id) {
    return db('schemes').where({ id }).first();
}

function findSteps(id) {
    return db("schemes")
      .select("scheme_id", "scheme_name", "step_number", "instructions")
      .join("steps", "steps.scheme_id", "=", "schemes.id")
      .where({ scheme_id: id })
      .orderBy("step_number");
  }

function add(scheme) {
   return db("schemes").insert(scheme);
}

function update(changes, id) {
    return db("schemes").where({ id }).update(changes);
}
  
function remove(id) {
    return db("schemes").where({ id }).delete();
}
