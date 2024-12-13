from django.db import models
from apps.user.models import course 
# Create your models here.

class session(models.Model):
    id_session = models.AutoField(primary_key=True)
    id_course = models.ForeignKey(course, on_delete=models.CASCADE)
    date_session = models.DateField()
    start_time = models.TimeField()
    end_time = models.TimeField()
    #location = postgis

    def __str__(self):
        return f"Session {self.id_session} - {self.id_course.course_name} - {self.date_session}"

class material(models.Model):
    id_material = models.AutoField(primary_key=True)
    link = models.URLField()
    id_session = models.ForeignKey(session, on_delete=models.CASCADE)
    
    

