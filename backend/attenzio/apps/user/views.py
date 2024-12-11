from rest_framework import viewsets
from .models import user, course
from .serializer import UserSerializer, CourseSerializer

class UserViewSet(viewsets.ModelViewSet):
  queryset = user.objects.all()
  serializer_class = UserSerializer
  

class courseViewSet(viewsets.ModelViewSet):
  queryset = course.objects.all()
  serializer_class = CourseSerializer