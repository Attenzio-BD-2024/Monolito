from django.urls import path
from rest_framework.routers import DefaultRouter
from django.urls import path, include

from .views import *

router = DefaultRouter()
router.register(r'session', SessionViewSet, basename='session')
router.register(r'material', MaterialViewSet, basename='material')

urlpatterns = [
  path('', include(router.urls))
]
