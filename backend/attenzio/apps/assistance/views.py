from rest_framework import viewsets
from .models import assistance
from .serializer import AssistanceSerializer

class AssistanceViewSet(viewsets.ModelViewSet):
  queryset = assistance.objects.all()
  serializer_class = AssistanceSerializer
  
