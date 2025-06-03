from django.urls import path
from .views import (
    MedicationListCreateView,
    MedicationRetrieveUpdateDestroyView,
    MedicationLogListCreateView,
    MedicationLogRetrieveUpdateDestroyView
)

urlpatterns = [
    # Medication endpoints
    path("medications/", 
         MedicationListCreateView.as_view(), 
         name="medication-list-create"),
    path("medications/<int:pk>/", 
         MedicationRetrieveUpdateDestroyView.as_view(), 
         name="medication-detail"),
    
    # Medication Log endpoints
    path("medication-logs/", 
         MedicationLogListCreateView.as_view(), 
         name="medication-log-list-create"),
    path("medication-logs/<int:pk>/", 
         MedicationLogRetrieveUpdateDestroyView.as_view(), 
         name="medication-log-detail"),
]