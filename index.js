// backend/index.js

const express = require('express');
const cors = require('cors');
const { pendidikan, skills, proyek } = require('./data');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/api/pendidikan', (req, res) => res.json(pendidikan));
app.get('/api/skill', (req, res) => res.json(skills));
app.get('/api/proyek', (req, res) => res.json(proyek));

app.listen(PORT, () => {
  console.log(`Server backend berjalan di http://localhost:${PORT}`);
});
