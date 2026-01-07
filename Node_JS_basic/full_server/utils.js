import fs from 'fs';

async function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      // Split into lines and filter out empty lines
      const lines = data.split('\n').filter((line) => line.trim() !== '');

      // Remove the header
      const students = lines.slice(1);

      if (students.length === 0) {
        reject(new Error('Cannot load the database'));
        return;
      }

      // Organize students by field
      const fields = {};

      students.forEach((line) => {
        const [firstname, , , field] = line.split(',');

        if (field && firstname) {
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        }
      });

      resolve(fields);
    });
  });
}

export default readDatabase;
