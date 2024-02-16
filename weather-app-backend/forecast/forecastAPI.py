import requests
from dashboard.models import City

def _get_forecast_json(name, state):
    response = requests.get(f"http://0.0.0.0:5000/0.1/current?city={name}&state={state}")

    try:
        response.raise_for_status()
        return response.json()
    except:
        return None
    
def update_forecast():
    for city in City.objects.all():
        json = _get_forecast_json(city.name, city.state)
        if json is not None:
            try:
                city.temp = json['main']['temp']
                city.feels_like = json['main']['feels_like']
                city.temp_min = json['main']['temp_min']
                city.temp_max = json['main']['temp_max']
                city.description = json['weather'][0]['main']
                city.save()
            except:
                pass