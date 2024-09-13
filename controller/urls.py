from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path("controller", views.controller, name="controller"),
    path("product_costing", views.product_costing, name="product_costing")
]