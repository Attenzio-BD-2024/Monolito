from rest_framework import generics, status
from rest_framework.response import Response

from .models import assistance
from .serializer import AssistanceSerializer

class ListCreateAssistances(generics.ListAPIView):
  queryset = assistance.objects.all()
  serializer_class = AssistanceSerializer
  
  def post(self, request, *args, **kwargs):
    data= request.data
    serr = AssistanceSerializer(data=data)
    if (serr.is_valid()):
      serr.save()
      return Response(serr.validated_data, status=status.HTTP_200_OK)  
    
    return Response(status=status.HTTP_400_BAD_REQUEST)
