# 🌐 80s Retro-Futuristic Shoutbox

A nostalgic, cyberpunk-themed shoutbox application with persistent storage and modern web technologies.

## ✨ Features

- 🎮 **80s Retro-Futuristic Design**: Cyberpunk aesthetic with neon colors and Orbitron font
- 💾 **Persistent Storage**: Messages saved between server restarts using JSON file storage
- 📱 **Modern Functionality**: Auto-scrolling, real-time updates, responsive design
- 🎨 **Neon Animations**: Glitch effects, pulsing buttons, and glowing elements
- 🔄 **Username Persistence**: Username stays after sending messages (click to edit)
- 📝 **Message Limit**: Automatically keeps the last 50 messages

## 🚀 Quick Start

### Prerequisites
- Node.js installed on your system

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/dwhacks/shoutbox-app.git
   cd shoutbox-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the server:**
   ```bash
   node server.js
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Technical Details

### Architecture
- **Backend**: Node.js with Express.js
- **Frontend**: Vanilla JavaScript with modern ES6+ features
- **Storage**: JSON file-based persistence (`messages.json`)
- **Styling**: Custom CSS with 80s cyberpunk aesthetics

### Message Format
```json
{
  "username": "string",
  "message": "string", 
  "timestamp": 1234567890
}
```

### API Endpoints
- `GET /messages` - Retrieve all messages
- `POST /messages` - Post a new message
- `GET /` - Serve the main application

## 🎨 Design Elements

### Color Scheme
- **Background**: Deep purple gradient (#1a0033 → #4d0099)
- **Primary Neon**: Cyan (#00ffff)
- **Secondary Neon**: Magenta (#ff00ff)
- **Text**: White with neon glow effects

### Features
- Glowing borders and text shadows
- Animated glitch effects on message hover
- Custom gradient scrollbar
- Pulsing submit button with shimmer effect
- Scanline grid overlay for CRT monitor effect

## 📁 File Structure

```
shoutbox-app/
├── index.html          # Main HTML structure
├── style.css           # 80s retro styling
├── script.js           # Frontend JavaScript
├── server.js           # Express.js server with persistence
├── package.json        # Node.js dependencies
├── messages.json       # Persistent message storage
└── README.md          # This file
```

## 🔧 Configuration

The application can be configured by modifying:
- **Port**: Change `const port = 3000;` in `server.js`
- **Message Limit**: Adjust `if (messages.length > 50)` in `server.js`
- **Storage Location**: Modify `MESSAGES_FILE` constant in `server.js`

## 🌐 Deployment

To deploy this application publicly:

1. **Choose a hosting provider** (Heroku, AWS, DigitalOcean, etc.)
2. **Set up Node.js environment**
3. **Configure reverse proxy** (Nginx/Apache)
4. **Set up domain and SSL**
5. **Use PM2** for process management
6. **Configure environment variables** for production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🎮 Enjoy the Retro Experience!

Relive the 80s cyberpunk aesthetic while enjoying modern web functionality. 🚀💜