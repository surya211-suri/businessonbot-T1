const client = require('./connection.js')
const express = require('express');
const app = express();
let port_no = process.env.PORT || 3000

app.listen(port_no, () => {
    console.log("Sever is now listening at port "+port_no);
})

client.connect();


app.get('/', (req, res) => {
    
    res.send("sample");
})

app.get('/api/branch', (req, res) => {
    var query = req.query.q;
    var limit = req.query.limit;
    var offset = req.query.offset;
    console.log(query, limit, offset);
    client.query(`Select * from bank_branches where branch ilike '${query}%' limit ${limit} offset ${offset}`, (err, result) => {
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
    client.query(`Select * from bank_branches where branch ilike '${query}%' or ifsc ilike '${query}%' or address ilike '${query}%' or city ilike '${query}%' or district ilike '${query}%' or state ilike '${query}%' or bank_name ilike '${query}%' limit ${limit} offset ${offset}`, (err, result) => {
        if (!err) {
            res.send(result.rows);

        }
        else {
            console.log("eroor" + err);
        }
    });
    client.end;
})
