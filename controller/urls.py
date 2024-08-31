from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path("controller", views.controller, name="controller"),
    path('send_input/', views.send_input, name='send_input'),
]