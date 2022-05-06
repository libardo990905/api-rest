import config from "./../config";
const { Pool } = require('pg');

const pg_connection = new Pool({
    host: config.host,
    user: config.userdb,
    password: config.password,
    database: config.database,
    port: config.port,
});

const getConnection = () => {
    return pg_connection;
}

module.exports = {
    getConnection
};
