import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    const databasePath = process.argv[2];

    try {
      const fields = await readDatabase(databasePath);
      const output = ['This is the list of our students'];

      const sortedfields = Object.keys(fields).sort(
        (a, b) => a.toLowerCase().localeCompare(b.toLowerCase()),
      );

      sortedfields.forEach((field) => {
        output.push(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      });

      res.status(200).send(output.join('\n'));
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const databasePath = process.argv[2];
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const fields = await readDatabase(databasePath);

      if (fields[major]) {
        res.status(200).send(`List: ${fields[major].join(', ')}`);
      } else {
        res.status(200).send('List: ');
      }
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}
export default StudentsController;
