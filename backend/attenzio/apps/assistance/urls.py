from django.urls import include
from rest_framework.routers import DefaultRouter
from django.urls import path

from .views import *

router = DefaultRouter()
router.register(r'assistance', AssistanceViewSet, basename='assistance')

urlpatterns = [
  path('', include(router.urls))
]

