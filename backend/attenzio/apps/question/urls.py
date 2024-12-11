from django.urls import path
from rest_framework.routers import DefaultRouter
from django.urls import path, include

from .views import *

router = DefaultRouter()
router.register(r'question', QuestionViewSet, basename='question')

urlpatterns = [
  path('', include(router.urls))
]
