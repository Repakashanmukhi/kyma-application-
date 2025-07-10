const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, 'data.json');

app.use(bodyParser.json());

app.get('/getdata', (req, res) => {
  fs.readFile(DATA_FILE, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read file' });
    }
    res.json(JSON.parse(data || '[]'));
  });
});

app.post('/postdata', (req, res) => {
  const newData = req.body;

  fs.readFile(DATA_FILE, 'utf8', (err, data) => {
    let existingData = [];
    if (!err && data) {
      existingData = JSON.parse(data);
    }

    existingData.push(newData);

    fs.writeFile(DATA_FILE, JSON.stringify(existingData, null, 2), err => {
      if (err) {
        return res.status(500).json({ error: 'Failed to write file' });
      }
      res.json({ message: 'Data inserted successfully' });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
