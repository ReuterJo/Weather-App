from django.db import models

# Create your models here.
class City(models.Model):
    name = models.CharField(max_length=150)
    country = models.CharField(max_length=150)
    state = models.CharField(max_length=150)
    temp = models.FloatField(default=0)
    feels_like = models.FloatField(default=0)
    temp_min = models.FloatField(default=0)
    temp_max = models.FloatField(default=0)
    description = models.CharField(max_length=150, default='')

    class Meta:
        ordering = ["state"]

    def __str__(self):
        return self.name + ", " + self.state + ", " + self.country

# Need to define a intersection table to maintain order of city addition to user profile

class UserId(models.Model):
    userId = models.CharField(max_length=150)
    cities = models.ManyToManyField(City, blank=True, default='')

    class Meta:
        ordering = ["userId"]

    def __str__(self):
        return self.userId