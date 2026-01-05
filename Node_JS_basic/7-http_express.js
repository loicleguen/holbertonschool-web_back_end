const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const databasePath = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const output = ['This is the list of students'];

  const originalLog = console.log;
  console.log = (msg) => {
    output.push(msg);
  };

  try {
    await countStudents(databasePath);
    console.log = originalLog;
    res.send(output.join('\n'));
  } catch (error) {
    console.log = originalLog;
    output.push(error.message);
    res.send(output.join('\n'));
  }
});

app.listen(1245);
module.exports = app;
