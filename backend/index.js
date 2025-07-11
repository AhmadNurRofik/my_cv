// backend/index.js
const express = require('express');
const cors    = require('cors');
const path    = require('path');
const { educationHistory, skills, projects } = require('./data');

const app = express();

// ==== Middleware ====
app.use(cors());
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// ==== Routes ====
app.get('/api/education', (req, res) => res.json(educationHistory));
app.get('/api/skills',     (req, res) => res.json(skills));
app.get('/api/projects',   (req, res) => res.json(projects));

// ==== Jalankan lokal (npm run dev) ====
if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`✅ Local API running on http://localhost:${PORT}`));
}

// ==== Ekspor untuk Vercel ====
module.exports = app;