from django.db import models
from django.utils.translation import gettext_lazy as _

# Create your models here.


class user(models.Model):

    class role(models.TextChoices):
        STUDENT = 'ST', _('Student')
        PROFESSOR = 'PR', _('Professor')
        MONITOR = 'MO', _('Monitor')

    id_unique = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)
    email = models.EmailField()
    address = models.CharField(max_length=200)
    password = models.CharField(max_length=50)
    phone_number = models.CharField(max_length=10)
    register = models.BinaryField(null=True) 
    rol = models.CharField( max_length=2, choices=role.choices, default=role.STUDENT)

    def __str__(self):
        return  f"{self.name} {self.lastname}"



class course(models.Model):
    id_course = models.AutoField(primary_key=True)
    course_name = models.CharField(max_length=50)
    students = models.ManyToManyField(
        user, 
        related_name="courses", 
        blank=True
    )

    def __str__(self):
        return self.course_name