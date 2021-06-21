from django.urls import path
from . import views

urlpatterns = [
    path('', views.TaskViewSet),
    path('/<int:id>', views.TaskViewSet)
]
