// backend/index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false // wajib untuk Railway
  }
});


app.use(cors());
app.use(express.json());


//pendidikan
app.get('/api/pendidikan', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM pendidikan ORDER BY id ASC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.post('/api/pendidikan', async (req, res) => {
  const { period, institution, major } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO pendidikan (period, institution, major) VALUES ($1, $2, $3) RETURNING *',
      [period, institution, major]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.put('/api/pendidikan/:id', async (req, res) => {
  const { id } = req.params;
  const { period, institution, major } = req.body;

  try {
    const result = await pool.query(
      'UPDATE pendidikan SET period = $1, institution = $2, major = $3 WHERE id = $4 RETURNING *',
      [period, institution, major, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Data dengan ID tersebut tidak ditemukan.' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.delete('/api/pendidikan/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query('DELETE FROM pendidikan WHERE id = $1 RETURNING *', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Data tidak ditemukan' });
    }

    res.json({ message: 'Data berhasil dihapus', data: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//skill
app.get('/api/skills', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM skills ORDER BY id ASC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.post('/api/skills', async (req, res) => {
  const { name, level } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO skills (name, level) VALUES ($1, $2) RETURNING *',
      [name, level]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.put('/api/skills/:id', async (req, res) => {
  const { id } = req.params;
  const { name, level } = req.body;

  try {
    const result = await pool.query(
      'UPDATE skills SET name = $1, level = $2 WHERE id = $3 RETURNING *',
      [name, level, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Data tidak ditemukan' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.delete('/api/skills/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query('DELETE FROM skills WHERE id = $1 RETURNING *', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Data tidak ditemukan' });
    }

    res.json({ message: 'Data berhasil dihapus', data: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//proyek
app.get('/api/proyek', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM proyek ORDER BY id ASC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.post('/api/proyek', async (req, res) => {
  const { title, image, description, tech, link } = req.body;

  // Tambahkan ini:
  console.log('Data diterima:', req.body);

  try {
    const result = await pool.query(
      'INSERT INTO proyek (title, image, description, tech, link) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [title, image, description, JSON.stringify(tech), link]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('ERROR:', err); // Tambahkan log error
    res.status(500).json({ error: err.message });
  }
});
app.put('/api/proyek/:id', async (req, res) => {
  const { id } = req.params;
  const { title, image, description, tech, link } = req.body;
  try {
    const result = await pool.query(
      'UPDATE proyek SET title = $1, image = $2, description = $3, tech = $4, link = $5 WHERE id = $6 RETURNING *',
      [title, image, description, tech, link, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Data tidak ditemukan' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.delete('/api/proyek/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query('DELETE FROM proyek WHERE id = $1 RETURNING *', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Data tidak ditemukan' });
    }

    res.json({ message: 'Data berhasil dihapus', data: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//pengalaman
app.get('/api/pengalaman', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM pengalaman ORDER BY id ASC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/pengalaman', async (req, res) => {
  const { judul, tanggal, deskripsi } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO pengalaman (judul, tanggal, deskripsi) VALUES ($1, $2, $3) RETURNING *',
      [judul, tanggal, deskripsi]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/api/pengalaman/:id', async (req, res) => {
  const { id } = req.params;
  const { judul, tanggal, deskripsi } = req.body;

  try {
    const result = await pool.query(
      'UPDATE pengalaman SET judul = $1, tanggal = $2, deskripsi = $3 WHERE id = $4 RETURNING *',
      [judul, tanggal, deskripsi, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Data tidak ditemukan' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/api/pengalaman/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query('DELETE FROM pengalaman WHERE id = $1 RETURNING *', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Data tidak ditemukan' });
    }

    res.json({ message: 'Data berhasil dihapus', data: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.get('/api/db-test', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ connected: true, time: result.rows[0].now });
  } catch (error) {
    console.error('Database connection error:', error);
    res.status(500).json({ connected: false, error: error.message });
  }
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
  });
}

module.exports = app; 
