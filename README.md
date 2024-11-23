## Frontend - Real-Time Chat and Notifications App
This is the frontend of a real-time chat and notification application built using React and Ant Design. It communicates with the backend server via Socket.io for public chat messages and live notifications.

# Table of Contents
1. Features
2. Technologies Used
3. Getting Started
4. Folder Structure
5. Key Components
6. How to Run


# Features
- Public Chat:

1. Send and receive real-time public messages.
2. Display chat messages in a scrollable list.

- Live Notifications:

1. Notifications for new comments displayed in the top-right header area.
2. Badge counter to indicate the number of unseen notifications.

- User-Friendly UI:

1. Built with Ant Design for modern and responsive components.

# Technologies Used
- React.js: Framework for building the frontend.
- Ant Design: Component library for UI design.
- Socket.io: For real-time communication.

# Getting Started
- Prerequisites
Ensure you have the following installed:

1. Node.js (v14 or above)
2. npm or yarn

- Setup
1. Clone the repository:

git clone https://github.com/ayush7078/Social-Media-App-frontend.git
cd Social-Media-App-frontend

2. Install dependencies:

npm install

3. Start the application:

npm start

The application will be available at http://localhost:3000.

# Folder Structure
- frontend/
- ├── public/
- ├── src/
- │   ├── components/
- │   │   ├── Chat.js           # Chat component for public messages
- │   │   └── Chat.css              # Styling for chat component
- │   │   ├── Header.js         # Header component for notifications
- │   │   ├── CommentNotification.js  # Notification popup utility
- │   ├── utils/
- │   │   └── socket.js         # Socket connection setup
- │   ├── App.js                # Main App component
- │   ├── index.js              # Entry point
- ├── .env
- ├── package.json


# Key Components
1. Chat Component (Chat.js)
This component handles the public chat functionality:

Listens for chatMessage events from the backend.
Sends public messages to the backend via Socket.io.
Displays chat messages in a scrollable list.

2. Header Component (Header.js)
This component provides the live notifications functionality:

Listens for newComment events from the backend.
Displays notifications in a dropdown menu.
Uses a badge to indicate the number of notifications.

3. Socket Utility (socket.js)

How to Run
Start the backend server first (see backend README).

- Start the frontend server:
npm start
Open your browser and navigate to http://localhost:3000.