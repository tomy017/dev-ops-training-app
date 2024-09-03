var express = require("express");
var router = express.Router();
const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT,
});

router.get("/", async function(req, res, next) {
    try {
        const result = await pool.query('SELECT * FROM users');
        res.send(`API is working properly (${result.rows[0].id}, ${result.rows[0].name})`);
    } catch (err) {
        console.log(err);
        res.send("API is working properly without database");
    }
});

module.exports = router;
