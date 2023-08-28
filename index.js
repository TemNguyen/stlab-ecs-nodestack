const express = require('express');
const mysql = require('mysql2');

const app = express();
const PORT = 3000;

app.get('/', (req, res, next) => {
  res.json({ messages: 'home' });
});

app.get('/employees', (req, res, next) => {
  const db = mysql.createConnection({
    host: 'mysql_db',
    user: 'root',
    password: '123456',
    database: 'nodejs',
  });
  db.connect((err) => {
    if (err) throw err;
    console.log('connect db success');
  });
  const query = `SELECT * FROM employees`;
  db.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.listen(PORT, () => {
  console.log(`Example app listening on http://localhost:${PORT}`);
});
