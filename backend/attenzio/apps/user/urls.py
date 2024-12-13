from django.urls import path
from rest_framework.routers import DefaultRouter
from django.urls import path, include

from .views import *

router = DefaultRouter()
router.register(r'user', UserViewSet, basename='user')
router.register(r'course', CourseViewSet, basename='course')

urlpatterns = [
  path('', include(router.urls))
]

