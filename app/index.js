const express = require('express');
const mysql = require('mysql2');

const app = express();
const PORT = 8080;

// app.get('/', (req, res, next) => {
//   res.json({ messages: 'nodejs-work-fine :D' });
// });

app.get('/', (req, res, next) => {
  const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123qwe!@#',
    port: 3306,
    database: 'nodejs',
  });
  db.connect((err) => {
    if (err) {
      console.log(err);
    }
    console.log('connect db success');
  });
  const query = `SELECT * FROM employees`;
  db.query(query, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json(result);
  });
});

app.listen(PORT, () => {
  console.log(`Example app listening on http://localhost:${PORT}`);
});
