const client = require('./connection.js')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
let port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log("Sever is now listening at port 3000");
})

client.connect();


app.get('/', (req, res) => {
    client.query(`Select * from branches limit 100`, (err, result) => {
        if (!err) {
            res.send(result.rows);
        }
    });
    client.end;
})

app.get('/api/branch', (req, res) => {
    var query = req.query.q;
    var limit = req.query.limit;
    var offset = req.query.offset;
    console.log(query, limit, offset);
    client.query(`Select * from branches where branch ilike '${query}%' limit ${limit} offset ${offset}`, (err, result) => {
        if (!err) {
            res.send(result.rows);
        }
        else {
            console.log("eroor" + err);
        }
    });
    client.end;
})

app.get('/api/search', (req, res) => {
    var query = req.query.q;
    var limit = req.query.limit;
    var offset = req.query.offset;
    console.log(query, limit, offset);
    client.query(`Select * from branches where branch ilike '${query}%' or ifsc ilike '${query}%' or address ilike '${query}%' or city ilike '${query}%' or district ilike '${query}%' or state ilike '${query}%' or bank_name ilike '${query}%' limit ${limit} offset ${offset}`, (err, result) => {
        if (!err) {
            res.send(result.rows);

        }
        else {
            console.log("eroor" + err);
        }
    });
    client.end;
})
