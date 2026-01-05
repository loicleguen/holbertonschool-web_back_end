const http = require('http');
const countStudents = require('./3-read_file_async');

const databasePath = process.argv[2];

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  }else if (req.url === '/students') {
    let output = 'This is the list of our students\n';

    const originalLog = console.log;
    const logs = [];
    console.log = (msg) => {
      logs.push(msg);
    };

    try {
      await countStudents(databasePath);
      console.log = originalLog;
      output += logs.join('\n');
      res.end(output);
    } catch (error) {
      console.log = originalLog;
      output += error.msg;
      res.end(output);
    }
  } else {
    res.statusCode = 404;
    res.end('not found');
  }
});

app.listen(1245);
module.exports = app;
