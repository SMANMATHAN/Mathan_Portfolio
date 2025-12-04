import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS
app.use(cors());

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint to serve resume PDF
app.get('/api/resume', (req, res) => {
  const resumePath = path.join(__dirname, 'public', 'resume.pdf');
  
  // Check if file exists
  if (!fs.existsSync(resumePath)) {
    return res.status(404).json({ error: 'Resume not found' });
  }

  // Set headers for PDF download/view
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'inline; filename="resume.pdf"');
  
  // Send the PDF file
  res.sendFile(resumePath);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

