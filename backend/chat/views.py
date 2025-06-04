from django.shortcuts import render
from rest_framework import viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response
from chat.models import ChatRoom, Message
from chat.serializers import ChatRoomSerializer, MessageSerializer
from django.db.models import Q
from rest_framework.pagination import PageNumberPagination
from drf_spectacular.utils import extend_schema


class ChatRoomViewSet(viewsets.ModelViewSet):
    serializer_class = ChatRoomSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return ChatRoom.objects.filter(participants=self.request.user)

    def perform_create(self, serializer):
        chat_room = serializer.save()
        chat_room.participants.add(self.request.user)

    @action(detail=True, methods=['post'])
    @extend_schema(summary="Add participant", description="Add a user to the chat room.")
    def add_participant(self, request, pk=None):
        chat_room = self.get_object()
        user_id = request.data.get('user_id')
        if user_id:
            chat_room.participants.add(user_id)
            return Response({'status': 'participant added'})
        return Response({'error': 'user_id required'}, status=status.HTTP_400_BAD_REQUEST)

    @extend_schema(summary="List chat rooms", description="Returns all chat rooms for the user.")
    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)

    @extend_schema(summary="Create chat room", description="Create a new chat room.")
    def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)

    @extend_schema(summary="Retrieve chat room", description="Get details of a chat room.")
    def retrieve(self, request, *args, **kwargs):
        return super().retrieve(request, *args, **kwargs)

    @extend_schema(summary="Update chat room", description="Update a chat room.")
    def update(self, request, *args, **kwargs):
        return super().update(request, *args, **kwargs)

    @extend_schema(summary="Delete chat room", description="Delete a chat room.")
    def destroy(self, request, *args, **kwargs):
        return super().destroy(request, *args, **kwargs)

class MessagePagination(PageNumberPagination):
    page_size = 20

class MessageViewSet(viewsets.ModelViewSet):
    serializer_class = MessageSerializer
    permission_classes = [permissions.IsAuthenticated]
    pagination_class = MessagePagination

    def get_queryset(self):
        return Message.objects.filter(
            Q(room__participants=self.request.user)
        ).select_related('sender', 'room')

    def perform_create(self, serializer):
        serializer.save(sender=self.request.user)

    @extend_schema(summary="List messages", description="List all messages in chat rooms the user participates in.")
    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)

    @extend_schema(summary="Send message", description="Send a new message to a chat room.")
    def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)

    @extend_schema(summary="Retrieve message", description="Get details of a message.")
    def retrieve(self, request, *args, **kwargs):
        return super().retrieve(request, *args, **kwargs)

    @extend_schema(summary="Mark message as read", description="Mark a message as read.")
    @action(detail=True, methods=['post'])
    def mark_as_read(self, request, pk=None):
        message = self.get_object()
        message.is_read = True
        message.save()
        return Response({'status': 'message marked as read'})
