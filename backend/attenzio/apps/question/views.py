from rest_framework import viewsets
from .models import question
from .serializer import QuestionSerializer

class QuestionViewSet(viewsets.ModelViewSet):
  queryset = question.objects.all()
  serializer_class = QuestionSerializer
  