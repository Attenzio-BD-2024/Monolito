from django.db import models
from apps.session.models import session

# Create your models here.

class assistance(models.Model):
    id_assistance = models.AutoField(primary_key=True)
    id_session = models.ForeignKey(session, on_delete=models.CASCADE)
    date_assistance = models.DateField()
    time_assistance = models.TimeField()
    #location_assistance = postgis


 