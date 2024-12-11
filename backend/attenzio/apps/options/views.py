from rest_framework import viewsets
from .models import options, student_options
from .serializer import OptionsSerializer, StudentOptionsSerializer

class OptionsViewSet(viewsets.ModelViewSet):
  queryset = options.objects.all()
  serializer_class = OptionsSerializer
  
class StudentOptionsViewSet(viewsets.ModelViewSet):
  queryset = student_options.objects.all()
  serializer_class = StudentOptionsSerializer
  
