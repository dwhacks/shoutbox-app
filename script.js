// script.js
// Display messages with timestamps

document.addEventListener("DOMContentLoaded", function () {
  const messageList = document.getElementById("messageList");
  const usernameInput = document.getElementById("username");
  const messageInput = document.getElementById("message");
  const form = document.getElementById("messageForm");

  // Load messages from server
  async function loadMessages() {
    try {
      const response = await fetch("/messages");
      const messages = await response.json();

      messageList.innerHTML = "";

      messages.forEach(message => {
        // Format timestamp: "MMM DD • h:mm AM/PM"
        const date = new Date(message.timestamp);
        const time = date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true });
        const dateStr = date.toLocaleDateString([], { month: 'short', day: 'numeric' });
        const formattedTime = `${dateStr} • ${time}`;

        const li = document.createElement("li");
        li.innerHTML = `<span class="username">${message.username}</span> @ <span class="timestamp">${formattedTime}</span> : <span class="message-text">${message.message}</span>`;
        messageList.appendChild(li);
      });

      // Auto-scroll to bottom to show latest message
      messageList.scrollTop = messageList.scrollHeight;
    } catch (error) {
      console.error("Error loading messages:", error);
    }
  }

  // Submit new message
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = usernameInput.value.trim();
    const message = messageInput.value.trim();

    if (!username || !message) return;

    try {
      await fetch("/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, message })
      });

      messageInput.value = "";
      loadMessages(); // Refresh messages
      
      // Smooth scroll to bottom after sending message
      setTimeout(() => {
        messageList.scrollTo({
          top: messageList.scrollHeight,
          behavior: 'smooth'
        });
      }, 100);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  });

  // Add click handler to username input for easy editing
  usernameInput.addEventListener('click', function() {
    if (this.value) {
      this.select(); // Select all text for easy editing
    }
  });

  // Add placeholder hint that username persists
  usernameInput.setAttribute('title', 'Click to edit username');

  // Initial load
  loadMessages();
});