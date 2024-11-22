import React, { useState, useEffect } from 'react';
import { Layout, Badge, Dropdown, Menu, Typography } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import socket from '../utils/socket'; // Socket instance

const { Header } = Layout;
const { Text } = Typography;

const AppHeader = () => {
  const [notifications, setNotifications] = useState([]); // To store notifications

  useEffect(() => {
    // Listen for live comment notifications
    socket.on('newComment', (comment) => {
      setNotifications((prev) => [
        ...prev,
        {
          key: `${Date.now()}`,
          username: comment.username,
          text: comment.text,
          postId: comment.postId,
        },
      ]);
    });

    return () => {
      socket.off('newComment');
    };
  }, []);

  // Menu items for the dropdown
  const menu = (
    <Menu
      items={
        notifications.length > 0
          ? notifications.map((notif) => ({
              key: notif.key,
              label: (
                <div>
                  <Text strong>{notif.username}</Text>: {notif.text}
                </div>
              ),
            }))
          : [
              {
                key: 'empty',
                label: <Text type="secondary">No notifications</Text>,
              },
            ]
      }
    />
  );

  return (
    <Header style={{ backgroundColor: 'skyblue', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
      <Text style={{ fontSize: '24px', color: 'white', margin: 0 }}>Real-Time Chat App and Notifications</Text>
      <Dropdown overlay={menu} placement="bottomRight" trigger={['click']}>
        <Badge count={notifications.length} offset={[10, 0]}>
          <BellOutlined style={{ fontSize: '24px', color: 'white', cursor: 'pointer' }} />
        </Badge>
      </Dropdown>
    </Header>
  );
};

export default AppHeader;
