const config = require('../../env');

module.exports = {
  development: {
    username: config.db_user,
    password: config.db_password,
    database: config.db_name,
    host: config.db_host,
    port: config.db_port,
    dialect: 'mysql'
  }
};
