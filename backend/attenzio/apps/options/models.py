from django.db import models
from apps.user.models import user
from apps.question.models import question
# Create your models here.

class options(models.Model):
    id_answer = models.AutoField(primary_key=True)
    id_unique = models.ForeignKey(user, on_delete=models.CASCADE, default=1)
    id_question = models.ForeignKey(question, on_delete=models.CASCADE, default=1)
    option = models.CharField(max_length=200, default=1)
    correct_option = models.CharField(max_length=200, default='')
    
    def __str__(self):
        return self.option
    

class student_options(models.Model):
    id_unique = models.ForeignKey(user, on_delete=models.CASCADE)
    id_answer = models.ForeignKey(options, on_delete=models.CASCADE)
    #location = postgis

