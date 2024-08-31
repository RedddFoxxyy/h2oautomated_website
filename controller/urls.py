from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path("controller", views.controller, name="controller"),
    path('get_commands/', views.get_commands, name='get_commands'),
]