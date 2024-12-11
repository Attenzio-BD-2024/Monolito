from django.db import models
from apps.session.models import session

# Create your models here.

class question(models.Model):
    id_question = models.AutoField(primary_key=True)
    question = models.TextField(max_length=400)
    id_session = models.ForeignKey(session, on_delete=models.CASCADE)

        
    def __str__(self):
        return f"{self.question} {self.id_question}" 

