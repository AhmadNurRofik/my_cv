// backend/index.js
const express = require('express');
const cors = require('cors');
const path = require('path');
const { educationHistory, skills, projects } = require('./data');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'public/images')));

app.get('/api/education', (req, res) => res.json(educationHistory));
app.get('/api/skills', (req, res) => res.json(skills));
app.get('/api/projects', (req, res) => res.json(projects));

// Jangan gunakan app.listen() untuk Vercel
if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`✅ Server berjalan di http://localhost:${PORT}`);
  });
}

module.exports = app; // WAJIB untuk Vercel
