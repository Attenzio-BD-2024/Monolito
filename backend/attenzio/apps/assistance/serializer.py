from rest_framework import serializers
from .models import assistance

class AssistanceSerializer(serializers.ModelSerializer):
  
  class Meta:
    model = assistance
    fields = '__all__'