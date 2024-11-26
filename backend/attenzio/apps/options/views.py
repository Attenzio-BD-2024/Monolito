from rest_framework import generics, status
from rest_framework.response import Response

from .models import options
from .serializer import OptionsSerializer

class ListCreateOptions(generics.ListAPIView):
  queryset = options.objects.all()
  serializer_class = OptionsSerializer
  
  def post(self, request, *args, **kwargs):
    data= request.data
    serr = OptionsSerializer(data=data)
    if (serr.is_valid()):
      serr.save()
      return Response(serr.validated_data, status=status.HTTP_200_OK)  
    
    return Response(status=status.HTTP_400_BAD_REQUEST)