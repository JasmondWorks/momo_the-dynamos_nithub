from django.contrib import admin
from .models import Medication, MedicationLog

# Register your models here.
admin.site.register(MedicationLog)
admin.site.register(Medication)