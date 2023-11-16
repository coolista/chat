'use client'
import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import styles from './chat.module.css';

let socket;

export default function Chat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Socket.io sunucusuna bağlan
    socket = io('http://api.sendyourdream.com');
  
    // Mesajları dinle
    socket.on('chat message', (msg) => {
      console.log('Alınan mesaj:', msg); // Bu satırı ekleyin
      setMessages(prev => [...prev, msg]);
    });
  
    return () => {
      socket.off('chat message');
      socket.disconnect();
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit('chat message', message);
      setMessage('');
    }
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.messages}>
        {messages.map((msg, index) => (
          <div key={index} className={styles.message}>{msg}</div>
        ))}
      </div>
      <form onSubmit={sendMessage} className={styles.inputForm}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={styles.inputField}
        />
        <button type="submit" className={styles.sendButton}>Gönder</button>
      </form>
    </div>
  );
}
