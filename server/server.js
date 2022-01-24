const express = require('express');
const app = express();
const mysql = require('mysql2')
const db = mysql.createConnection({
    host: "localhost",
    port: '3306',
    user: "root",
    password: "root",
    database: "spiessolutions"
})
db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Server!');
});

app.get('/asd asd asd as', (req, res) => {
    const sqlInsert = "INSERT INTO user (UserName,Email,passwordHash) VALUES ('testuser','test@test.test','nakjsdnak;js dkjlasmd lkamso[d m');";
    db.query(sqlInsert, (err, result) => {
        res.send("test out")
    })
})

app.listen(3001, () => {
    console.log("Running on Port 3001")
});

