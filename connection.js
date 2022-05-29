const {Client} = require('pg')

const client = new Client({
    host: "ec2-54-204-56-171.compute-1.amazonaws.com",
    user: "lmxexqyyjwougq",
    port: 5432,
    password: "9b69ab616cb189f5cde9daca2bfc8b55d573d1da8b20b9616826b063f9a39927",
    database: "debf5nk6tsg5ii",
    ssl:{
        rejectUnauthorized: false
    }
})

module.exports = client
