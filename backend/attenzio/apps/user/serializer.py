from rest_framework import serializers
from .models import user, course

class UserSerializer(serializers.ModelSerializer):
  
  class Meta:
    model = user
    fields = '__all__'


class CourseSerializer(serializers.ModelSerializer):
  
  class Meta:
    model = course
    fields = '__all__'