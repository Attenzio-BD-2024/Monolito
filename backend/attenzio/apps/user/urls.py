from rest_framework.urlpatterns import format_suffix_patterns
from django.urls import re_path

from .views import *

urlpatterns = [
  re_path(r'$', ListCreateUsers.as_view(), name='create-list-users'),
  re_path(r'$', ListCreateCourses.as_view(), name='create-list-courses')
]

urlpatterns = format_suffix_patterns(urlpatterns)