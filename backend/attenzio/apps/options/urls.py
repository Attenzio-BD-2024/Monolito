from django.urls import path
from rest_framework.routers import DefaultRouter
from django.urls import path, include

from .views import *

router = DefaultRouter()
router.register(r'options', OptionsViewSet, basename='options')
router.register(r'student_options',StudentOptionsViewSet, basename='student_options')

urlpatterns = [
  path('', include(router.urls))
]
