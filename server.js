const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;
const MESSAGES_FILE = path.join(__dirname, 'messages.json');

// Load messages from file or initialize empty array
function loadMessages() {
  try {
    if (fs.existsSync(MESSAGES_FILE)) {
      const data = fs.readFileSync(MESSAGES_FILE, 'utf8');
      return JSON.parse(data);
    }
    return [];
  } catch (error) {
    console.error('Error loading messages:', error);
    return [];
  }
}

// Save messages to file
function saveMessages(messages) {
  try {
    fs.writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2));
  } catch (error) {
    console.error('Error saving messages:', error);
  }
}

// Log request details
app.use((req, res, next) => {
  console.log(`Request Method: ${req.method}`);
  console.log(`Request URL: ${req.url}`);
  console.log(`Request Headers: ${JSON.stringify(req.headers, null, 2)}`);
  console.log(`Request Body: ${JSON.stringify(req.body, null, 2)}`);
  next();
});

// Parse JSON bodies
app.use(express.json());

// Serve static files from the current directory
app.use(express.static('.'));

// Handle root route explicitly
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Message storage (persistent)
let messages = loadMessages();

// Route to get messages
app.get('/messages', (req, res) => {
  res.json(messages);
});

// Route to post new message
app.post('/messages', (req, res) => {
  try {
    const { username, message } = req.body;
    messages.push({ username, message, timestamp: Date.now() });
    // Keep only last 50 messages
    if (messages.length > 50) {
      messages.shift();
    }
    // Save to persistent storage
    saveMessages(messages);
    res.sendStatus(200);
  } catch (err) {
    console.error('Error posting message:', err);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`Loaded ${messages.length} messages from persistent storage`);
  console.log(`Messages file: ${MESSAGES_FILE}`);
});
