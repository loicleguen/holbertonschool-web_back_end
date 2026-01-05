const http = require('http');
const countStudents = require('./3-read_file_async');

const databasePath = process.argv[2];

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    const output = ['This is the list of our students'];

    const originalLog = console.log;
    console.log = (msg) => {
      output.push(msg);
    };

    try {
      await countStudents(databasePath);
      console.log = originalLog;
      res.end(output.join('\n'));
    } catch (error) {
      console.log = originalLog;
      output.push(error.message);
      res.end(output.join('\n'));
    }
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  }
});

app.listen(1245);
module.exports = app;
