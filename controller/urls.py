from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path("controller", views.controller, name="controller"),
    path("price_list", views.price_list, name="price_list")
]