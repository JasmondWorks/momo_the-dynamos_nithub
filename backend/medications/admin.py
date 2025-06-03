from django.contrib import admin
<<<<<<< HEAD

# Register your models here.
=======
from .models import Medication, MedicationLog

# Register your models here.
admin.site.register(MedicationLog)
admin.site.register(Medication)
>>>>>>> backend
