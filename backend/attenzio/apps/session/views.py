from rest_framework import viewsets
from .models import session, material
from .serializer import SessionSerializer, MaterialSerializer

class SessionViewSet(viewsets.ModelViewSet):
  queryset = session.objects.all()
  serializer_class = SessionSerializer
  

class MaterialViewSet(viewsets.ModelViewSet):
  queryset = material.objects.all()
  serializer_class = MaterialSerializer
  