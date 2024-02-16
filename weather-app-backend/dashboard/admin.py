from django.contrib import admin

from .models import City, UserId

# Register your models here.
class CityAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'state', 'country', 'temp', 'feels_like', 'temp_min', 'temp_max', 'description')

class UserIdAdmin(admin.ModelAdmin):
    list_display = ('id', 'userId')

admin.site.register(City, CityAdmin)
admin.site.register(UserId, UserIdAdmin)