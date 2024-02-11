from django.db import models

# Create your models here.
class City(models.Model):
    name = models.CharField(max_length=150)
    country = models.CharField(max_length=150)
    state = models.CharField(max_length=150)

    class Meta:
        ordering = ["state"]

    def __str__(self):
        return self.name + ", " + self.state + ", " + self.country
    
class UserId(models.Model):
    userId = models.CharField(max_length=150)
    cities = models.ManyToManyField(City, blank=True, default='')

    class Meta:
        ordering = ["userId"]

    def __str__(self):
        return self.userId