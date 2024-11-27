from rest_framework import serializers
from .models import session

class SessionSerializer(serializers.ModelSerializer):
  
  class Meta:
    model = session
    fields = '__all__'