# Chat Module

## Overview
The chat module provides real-time messaging functionality between users. It supports chat rooms and direct messaging.

## Features
- Create and manage chat rooms
- Send and receive messages
- Mark messages as read
- Add participants to chat rooms
- Real-time message updates

## API Endpoints

### Chat Rooms
- `GET /api/chat/rooms/` - List user's chat rooms
- `POST /api/chat/rooms/` - Create new chat room
- `GET /api/chat/rooms/{id}/` - Get chat room details
- `PUT /api/chat/rooms/{id}/` - Update chat room
- `DELETE /api/chat/rooms/{id}/` - Delete chat room
- `POST /api/chat/rooms/{id}/add_participant/` - Add user to chat room

### Messages
- `GET /api/chat/messages/` - List messages
- `POST /api/chat/messages/` - Send new message
- `GET /api/chat/messages/{id}/` - Get message details
- `POST /api/chat/messages/{id}/mark_as_read/` - Mark message as read

## Models
- `ChatRoom`: Represents a chat room with multiple participants
- `Message`: Represents a message in a chat room

## Authentication
All endpoints require JWT authentication. 