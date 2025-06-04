from django.urls import path
from . import views # Assuming your views.py is in the same directory

urlpatterns = [

    path('register/', views.RegisterView.as_view(), name='register'),

    path('login/', views.LoginView.as_view(), name='login'),

]

