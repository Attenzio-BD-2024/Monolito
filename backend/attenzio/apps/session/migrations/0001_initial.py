# Generated by Django 5.1.2 on 2024-11-20 16:39

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='course',
            fields=[
                ('id_course', models.IntegerField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='session',
            fields=[
                ('id_session', models.IntegerField(primary_key=True, serialize=False)),
            ],
        ),
    ]