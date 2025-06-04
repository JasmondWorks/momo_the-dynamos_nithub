from django.test import TestCase
from django.contrib.auth import get_user_model
from rest_framework.test import APITestCase
from rest_framework import status
from chat.models import ChatRoom, Message

User = get_user_model()

class ChatRoomTests(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user(username='testuser', password='testpass')
        self.client.force_authenticate(user=self.user)
        self.room = ChatRoom.objects.create(name='Test Room')
        self.room.participants.add(self.user)

    def test_create_chat_room(self):
        url = '/api/chat/rooms/'
        data = {'name': 'New Room'}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(ChatRoom.objects.count(), 2)

    def test_send_message(self):
        url = '/api/chat/messages/'
        data = {
            'room': self.room.id,
            'content': 'Test message'
        }
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Message.objects.count(), 1)

    def test_mark_message_read(self):
        message = Message.objects.create(
            room=self.room,
            sender=self.user,
            content='Test message'
        )
        url = f'/api/chat/messages/{message.id}/mark_as_read/'
        response = self.client.post(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        message.refresh_from_db()
        self.assertTrue(message.is_read)
