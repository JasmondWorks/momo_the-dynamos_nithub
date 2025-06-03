from rest_framework import generics
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import Medication, MedicationLog
from .serializers import MedicationSerializer, MedicationLogSerializer

class MedicationListCreateView(generics.ListCreateAPIView):
    serializer_class = MedicationSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        return Medication.objects.filter(user=self.request.user)
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class MedicationRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = MedicationSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        return Medication.objects.filter(user=self.request.user)

class MedicationLogListCreateView(generics.ListCreateAPIView):
    serializer_class = MedicationLogSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        return MedicationLog.objects.filter(medication__user=self.request.user)
    
    def perform_create(self, serializer):
        medication = serializer.validated_data['medication']
        
        # Award points
        self.request.user.momo_points += 10
        self.request.user.save()
        serializer.save()

class MedicationLogRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = MedicationLogSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        return MedicationLog.objects.filter(medication__user=self.request.user)