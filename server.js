// Import the required modules
const express = require('express'); // Express web framework for Node.js
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON data
app.use(express.json());

// Serve the static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// In-memory array to store notes
let notes = [];

// GET all notes
app.get('/api/notes', (req, res) => {
  res.json(notes);
});

// POST a new note
app.post('/api/notes', (req, res) => {
  const newNote = req.body;
  newNote.id = Date.now().toString(); // Assign a unique ID based on the timestamp
  notes.push(newNote);
  res.status(201).json(newNote);
});

// DELETE a note by ID
app.delete('/api/notes/:id', (req, res) => {
  const noteId = req.params.id;
  notes = notes.filter((note) => note.id !== noteId);
  res.sendStatus(204); // No content
});

// Serve the frontend "index.html" for the landing page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve the frontend "notes.html" for the notes page
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'notes.html'));
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
});
