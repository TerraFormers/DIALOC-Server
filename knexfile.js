// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: "postgresql://localhost/dialoc_test_db"
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
