from rest_framework import serializers
from .models import session, material

class SessionSerializer(serializers.ModelSerializer):
  
  class Meta:
    model = session
    fields = '__all__'


class MaterialSerializer(serializers.ModelSerializer):
  
  class Meta:
    model = material
    fields = '__all__'