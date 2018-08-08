// Express import
const express = require('express');
const bodyParser = require('body-parser');

// MySQL import
// const mysql = require('mysql');

// App config
const app = express();
const port = 3000;

// MySQL config
// const con = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'test'
// });

// Body parser config
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MySQL connect
// con.connect((err) => {
//     if (err) throw err;
//     console.log('connected');
// })

app.post('/api/xfone', (req, res) => {
    const { name, age } = req.body.data;
    const ip  = req.connection.remoteAddress;

    // mySqlQuery(name, age);
    res.send('done ' + ip);
});

app.listen(port, () => {
    console.log('the server is running on port ' + port);
})

// MySQL query
// mySqlQuery = (name, age) => {
//     const sql = `INSERT INTO users (name, age) VALUES ('${name}', '${age}')`;
//     con.query(sql, (err, result) => {
//         if (err) throw err;
//         console.log(result);
//     });
// }



