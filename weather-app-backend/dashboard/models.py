from django.db import models

# Create your models here.
class City(models.Model):
    name = models.CharField(max_length=150)
    country = models.CharField(max_length=150)

    def __str__(self):
        return self.title