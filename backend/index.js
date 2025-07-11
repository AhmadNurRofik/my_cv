import express from 'express';
import cors    from 'cors';
import path    from 'path';
import { fileURLToPath } from 'url';
import { educationHistory, skills, projects } from './data.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(cors());
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'public/images')));

app.get('/api/education', (_req, res) => res.json(educationHistory));
app.get('/api/skills',     (_req, res) => res.json(skills));
app.get('/api/projects',   (_req, res) => res.json(projects));

if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
  const PORT = 3000;
  app.listen(PORT, () => console.log(`Local API on http://localhost:${PORT}`));
}

export default app;