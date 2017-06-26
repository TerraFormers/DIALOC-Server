const knex = require("./connection");

module.exports = {
  getAll: function() {
    return knex("user_table");
  },

  getOne: (id) => {
    return knex('user_table').where('id', id).first();
  },

  getOneByEmail: (email) => {
    return knex('user_table').where('email', email).first();
  },
}
