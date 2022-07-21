const ws = new WebSocket("ws://localhost:8001");

function receiveMessage(event) {
  const chatLog = document.getElementById('chat-log');
  chatLog.value += `${event.data}\n`;
}

function sendMessage() {
  const message = document.getElementById('chat-input').value;
  if (message.length === 0) return;
  ws.send(message);
  document.getElementById('chat-input').value = "";
}

document.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') sendMessage();
})

ws.onmessage = receiveMessage;