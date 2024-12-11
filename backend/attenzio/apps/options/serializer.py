from rest_framework import serializers
from .models import options, student_options

class OptionsSerializer(serializers.ModelSerializer):
  
  class Meta:
    model = options
    fields = '__all__'


class StudentOptionsSerializer(serializers.ModelSerializer):
  
  class Meta:
    model = student_options
    fields = '__all__'