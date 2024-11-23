import React, { useState, useEffect } from 'react';
import { Input, Button, List, Typography, notification } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import socket from '../utils/socket'; // socket.js is set up for socket connection
import './Chat.css'; 

const { Text } = Typography;

const Chat = () => {
  const [messages, setMessages] = useState([]); // Messages to display in the chat
  const [message, setMessage] = useState(''); // Current input message

  useEffect(() => {
    // Listen for incoming public chat messages
    socket.on('chatMessage', (msg) => {
      const formattedMessage = {
        type: 'public', // Identify as public chat message
        content:  `You: ${msg}`,
      };
      setMessages((prev) => [...prev, formattedMessage]);
    });

    // Listen for notifications about new comments
    socket.on('newComment', (comment) => {
      const formattedMessage = {
        type: 'notification', // Identify as a notification
        content: `${comment.username} commented: ${comment.text}`,
      };

      // Display notification popup
      notification.info({
        message: 'New Comment',
        description: formattedMessage.content,
        placement: 'topRight',
      });

      // Add to messages for chat context
      setMessages((prev) => [...prev, formattedMessage]);
    });

    return () => {
      socket.off('chatMessage');
      socket.off('newComment');
    };
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit('chatMessage', message); // Emit message to backend
      setMessage(''); 
    }
  };

  return (
    <div className="chat-container" style={{ maxWidth: '500px', margin: '50px auto' }}>
      <List
        header={<Text strong>Chat Messages</Text>}
        bordered
        dataSource={messages}
        renderItem={(item) => (
          <List.Item>
            {item.type === 'public' && <Text>{item.content}</Text>}
            {item.type === 'notification' && (
              <Text type="secondary" italic>
                {item.content}
              </Text>
            )}
          </List.Item>
        )}
        style={{ marginBottom: '20px', height: '300px', overflowY: 'scroll' }}
      />
      <Input
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onPressEnter={sendMessage}
        suffix={
          <Button type="primary" icon={<SendOutlined />} onClick={sendMessage}>
            Send
          </Button>
        }
      />
    </div>
  );
};

export default Chat;
